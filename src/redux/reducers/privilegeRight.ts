const initialState: any = {
    equities: [],
    listTitle: ""
};
export function PrivilegeRight(state = initialState, action: any) {
    switch (action.type) {
        case "RESET_PRIVILEGE_RIGHT":
            { return { ...state, ...action.value }; }
        default:
            { return state }
    }
}