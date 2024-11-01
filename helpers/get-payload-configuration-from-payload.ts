import type { ChartConfiguration } from "types/charts"

export const getPayloadConfigurationFromPayload = (configuration: ChartConfiguration, payload: unknown, key: string) => {
	if (typeof payload !== "object" || payload === null) return undefined

	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined

	let configuredLabelKey: string = key

	if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
		configuredLabelKey = payload[key as keyof typeof payload] as string
	} else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key as keyof typeof payloadPayload] === "string") {
		configuredLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
	}

	return configuredLabelKey in configuration ? configuration[configuredLabelKey] : configuration[key as keyof typeof configuration]
}
