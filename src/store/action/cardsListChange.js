import { CARD_LIST_ACTIONS } from "../selectors/actionTypes"

export const changeCard = (changeTaskName, changeTaskDescription, id) => {
    return (
        {
            type: CARD_LIST_ACTIONS.change,
            payload: {
                title: changeTaskName,
                description: changeTaskDescription,
                id: id,
            }
        })
};