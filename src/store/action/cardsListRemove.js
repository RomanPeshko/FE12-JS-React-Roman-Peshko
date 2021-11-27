import { CARD_LIST_ACTIONS } from "../selectors/actionTypes"

export const removeCard = (index) => {
    return (
        {
            type: CARD_LIST_ACTIONS.remove,
            payload: {
                index: index
            }
        })
};