import * as types from "./types"

export default {
    [types.LOGGING]: (state: any, payload: string) => {
        console.log(payload)
    },

    [types.ADVANCED_LOGGING]: (state: any, payload: string) => {
        console.log("advanced Logging: " + payload)
    }
}

/*export const logging = (state: any, payload: string) => {
    console.log(payload)
}

export const advancedLogging = (state: any, payload: string) => {
    console.log("advanced Logging: " + payload)
}*/
