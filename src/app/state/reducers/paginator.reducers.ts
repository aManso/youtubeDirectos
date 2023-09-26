import { createReducer, on } from "@ngrx/store";
import { PaginatorState } from "src/app/core/models/paginator.state";
import { actionLoadedPages, actionLoadingPages } from "../actions/paginator.actions";

export const initialState : PaginatorState = { loading: false, nextPageToken: undefined, resultsInPage: 0, totalResults: 0 };

export const paginatorReducer = createReducer(
    initialState,
    on(actionLoadingPages, (state) => {
        return { ...state, loading: true };
    }),
    on(actionLoadedPages, (state, {nextPageToken, totalResults, resultsInPage}) => {
        return { loading: false,  totalResults, nextPageToken, resultsInPage};
    }),
);
