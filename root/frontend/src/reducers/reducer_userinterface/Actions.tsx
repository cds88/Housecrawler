
export const SELECT_ACTIVE_ACTION = "SELECT_ACTIVE_ACTION"

export const DEBUG_ACTION = "DEBUG_ACTION"

export const TOGGLE_NAVTOP = "TOGGLE_NAVTOP"
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export interface ToggleNavtop{
    type: typeof TOGGLE_NAVTOP
}

export interface SelectActiveAction {
    type: typeof SELECT_ACTIVE_ACTION;
}

export interface DebugAction{
    type: typeof DEBUG_ACTION
 
}
export interface OpenModal{
    type: typeof OPEN_MODAL,
    images: string[]
}
export interface CloseModal {
    type: typeof CLOSE_MODAL

}

export type InterfaceActionTypes=
    | SelectActiveAction
    | DebugAction
    | ToggleNavtop
    | OpenModal
    | CloseModal

export type AppActions = InterfaceActionTypes;

 
