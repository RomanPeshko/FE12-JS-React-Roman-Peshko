import { CARD_LIST_ACTIONS } from "../selectors/actionTypes";

export const newCard = (newTaskName, newTaskDescription, state, id) => {
    return (
        {
            type: CARD_LIST_ACTIONS.add,
            payload: {
                title: newTaskName,
                description: newTaskDescription,
                state: state,
                id: id,
            }
        })
};