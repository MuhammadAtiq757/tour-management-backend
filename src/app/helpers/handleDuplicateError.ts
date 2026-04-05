import { TGenericErrorResponse } from "../interfaces/error.types"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handlerDuplicateError = (err: any): TGenericErrorResponse => {
    const matchedArray = err.message.match(/"([^"]*)"/)
    const keyValue = err?.keyValue ? Object.values(err.keyValue)[0] : undefined
    const duplicateValue = matchedArray?.[1] ?? (keyValue !== undefined ? String(keyValue) : "Value")

    return {
        statusCode: 400,
        message: `${duplicateValue} already exists!!`
    }
}