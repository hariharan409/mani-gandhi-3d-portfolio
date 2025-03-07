import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./slices/careerSlice";
import githubReducer from "./slices/githubSlice";

const store = configureStore({
    reducer: {
        career          : careerReducer,
        github          : githubReducer,
    }
});

export default store;