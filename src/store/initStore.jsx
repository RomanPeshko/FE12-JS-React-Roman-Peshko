import { createStore } from 'redux';


const initialState = [{
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
}];

const rootReducer = (state, action) => { 
    switch (action.type) {
        default: return {...state}
    }
}

export const store = createStore(rootReducer, initialState);
