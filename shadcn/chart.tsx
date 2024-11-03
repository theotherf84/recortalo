"use client"

import { getPayloadConfigurationFromPayload } from "helpers/get-payload-configuration-from-payload"
import { mergeClassNames } from "helpers/merge-class-names"
import React, { type ComponentProps, createContext, type CSSProperties, forwardRef, useContext, useId, useMemo } from "react"
import * as RechartsPrimitive from "recharts"
import { type ChartConfiguration, type ChartContextProperties, themes } from "types/charts"

export const ChartContext = createContext<ChartContextProperties | null>(null)

export const useChart = () => {
	const context = useContext(ChartContext)

	if (!context) throw new Error("useChart must be used within a <ChartContainer />")

	return context
}

export const ChartContainer = forwardRef<
	HTMLDivElement,
	ComponentProps<"div"> & {
		configuration: ChartConfiguration
		children: ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
	}
>(({ id, className, children, configuration, ...properties }, reference) => {
	const uniqueIdentifier = useId()
	const chartIdentifier = `chart-${id || uniqueIdentifier.replace(/:/g, "")}`

	return (
		<ChartContext.Provider value={{ configuration }}>
			<div
				data-chart={chartIdentifier}
				ref={reference}
				className={mergeClassNames(
					"flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
					className,
				)}
				{...properties}
			>
				<ChartStyle id={chartIdentifier} configuration={configuration} />
				<RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
			</div>
		</ChartContext.Provider>
	)
})

export const ChartStyle = ({ id, configuration }: { id: string; configuration: ChartConfiguration }) => {
	const colorConfiguration = Object.entries(configuration).filter(([_, configuration]) => configuration.theme || configuration.color)

	if (!colorConfiguration.length) return null

	return (
		<style
			// biome-ignore lint/security/noDangerouslySetInnerHtml: noDangerouslySetInnerHtml
			dangerouslySetInnerHTML={{
				__html: Object.entries(themes)
					.map(
						([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfiguration
	.map(([key, itemConfiguration]) => {
		const color = itemConfiguration.theme?.[theme as keyof typeof itemConfiguration.theme] || itemConfiguration.color
		return color ? `  --color-${key}: ${color};` : null
	})
	.join("\n")}
}
`,
					)
					.join("\n"),
			}}
		/>
	)
}

export const ChartTooltip = RechartsPrimitive.Tooltip

export const ChartTooltipContent = forwardRef<
	HTMLDivElement,
	ComponentProps<typeof RechartsPrimitive.Tooltip> &
		ComponentProps<"div"> & {
			hideLabel?: boolean
			hideIndicator?: boolean
			indicator?: "line" | "dot" | "dashed"
			nameKey?: string
			labelKey?: string
		}
>(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, reference) => {
	const { configuration } = useChart()

	const tooltipLabel = useMemo(() => {
		if (hideLabel || !payload?.length) return null

		const [item] = payload
		const key = `${labelKey || item.dataKey || item.name || "value"}`
		const itemConfiguration = getPayloadConfigurationFromPayload(configuration, item, key)
		const value = !labelKey && typeof label === "string" ? configuration[label as keyof typeof configuration]?.label || label : itemConfiguration?.label

		if (labelFormatter) return <div className={mergeClassNames("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>

		if (!value) return null

		return <div className={mergeClassNames("font-medium", labelClassName)}>{value}</div>
	}, [label, labelFormatter, payload, hideLabel, labelClassName, configuration, labelKey])

	if (!active || !payload?.length) return null

	const nestLabel = payload.length === 1 && indicator !== "dot"

	return (
		<div ref={reference} className={mergeClassNames("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className)}>
			{!nestLabel ? tooltipLabel : null}
			<div className="grid gap-1.5">
				{payload.map((item, index) => {
					const key = `${nameKey || item.name || item.dataKey || "value"}`
					const itemConfiguration = getPayloadConfigurationFromPayload(configuration, item, key)
					const indicatorColor = color || item.payload.fill || item.color

					return (
						<div
							key={item.dataKey}
							className={mergeClassNames(
								"flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
								indicator === "dot" && "items-center",
							)}
						>
							{formatter && item?.value !== undefined && item.name ? (
								formatter(item.value, item.name, item, index, item.payload)
							) : (
								<>
									{itemConfiguration?.icon ? (
										<itemConfiguration.icon />
									) : (
										!hideIndicator && (
											<div
												className={mergeClassNames("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
													"h-2.5 w-2.5": indicator === "dot",
													"w-1": indicator === "line",
													"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
													"my-0.5": nestLabel && indicator === "dashed",
												})}
												style={
													{
														"--color-bg": indicatorColor,
														"--color-border": indicatorColor,
													} as CSSProperties
												}
											/>
										)
									)}
									<div className={mergeClassNames("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")}>
										<div className="grid gap-1.5">
											{nestLabel ? tooltipLabel : null}
											<span className="text-muted-foreground">{itemConfiguration?.label || item.name}</span>
										</div>
										{item.value && <span className="font-mono font-medium tabular-nums text-foreground">{item.value.toLocaleString()}</span>}
									</div>
								</>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
})

export const ChartLegend = RechartsPrimitive.Legend

export const ChartLegendContent = forwardRef<
	HTMLDivElement,
	ComponentProps<"div"> &
		Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
			hideIcon?: boolean
			nameKey?: string
		}
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, reference) => {
	const { configuration } = useChart()

	if (!payload?.length) return null

	return (
		<div ref={reference} className={mergeClassNames("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
			{payload.map((item) => {
				const key = `${nameKey || item.dataKey || "value"}`
				const itemConfiguration = getPayloadConfigurationFromPayload(configuration, item, key)

				return (
					<div key={item.value} className={mergeClassNames("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}>
						{itemConfiguration?.icon && !hideIcon ? (
							<itemConfiguration.icon />
						) : (
							<div
								className="h-2 w-2 shrink-0 rounded-[2px]"
								style={{
									backgroundColor: item.color,
								}}
							/>
						)}
						{itemConfiguration?.label}
					</div>
				)
			})}
		</div>
	)
})
