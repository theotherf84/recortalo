import { cloneElement } from "react"

export const Clone = ({ children, ...properties }) => cloneElement(children, { ...properties })
