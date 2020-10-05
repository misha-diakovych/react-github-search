import React, { useReducer } from "react";
import {AlertContext} from "./alertContex";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
    const [state, dispath] = useReducer(alertReducer, null);

    const hide = () => dispath({type: HIDE_ALERT})
    const show = (text, type = 'secondary') => {
        dispath({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{ hide, show, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}
