import { applyMiddleware, createStore } from 'redux';
import { TASK_STATUS } from '../constants/taskStatus';
import { CARD_LIST_ACTIONS } from './selectors/actionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';

const newTaskList = [
    {
        state: TASK_STATUS.toDo,
        title: "Define more tags in components",
        description: "Define more tags in components. Define more tags in components.",
        id: 0,
        finishDate: 0,
        userId: 0
    },
    {
        state: TASK_STATUS.progress,
        title: "Add more user avatars",
        description: "Add more user avatars. Add more user avatars.",
        id: 1,
        finishDate: 0,
        userId: 0
    }
];

const initialState = { taskList: newTaskList };

const rootReducer = (state, action) => {
    let newTaskList = [];
    switch (action.type) {

        case (CARD_LIST_ACTIONS.add):
            newTaskList = [...state.taskList];
            newTaskList.push(
                {
                    state: action.payload.state,
                    title: action.payload.title,
                    description: action.payload.description,
                    id: action.payload.id
                }
            );
            return { ...state, taskList: newTaskList };

        case (CARD_LIST_ACTIONS.change):
            newTaskList = [...state.taskList];
            const elementTask = newTaskList.find(x => x.id === action.payload.id);
            elementTask.title = action.payload.title;
            elementTask.description = action.payload.description;
            return { ...state, taskList: newTaskList };
        default: return { ...state }
    }
}

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);
