import { CARD_LIST_ACTIONS } from "../selectors/actionTypes";

export const transferList = (state, index) => {
    return (
        {
            type: CARD_LIST_ACTIONS.transfer,
            payload: {
                state: state,
                index: index
            }
        })
};