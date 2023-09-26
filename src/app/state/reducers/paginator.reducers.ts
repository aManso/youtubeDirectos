import { createReducer, on } from "@ngrx/store";
import { PaginatorState } from "src/app/core/models/paginator.state";
import { actionLoadedPages, actionLoadingPages } from "../actions/paginator.actions";

export const initialState : PaginatorState = { loading: false, prevPageToken: undefined, nextPageToken: undefined, resultsInPage: 0, totalResults: 0, filter: undefined };

export const paginatorReducer = createReducer(
    initialState,
    on(actionLoadingPages, (state) => {
        return { ...state, loading: true };
    }),
    on(actionLoadedPages, (state, {prevPageToken, nextPageToken, totalResults, resultsInPage, filter}) => {
        return { loading: false,  totalResults, prevPageToken, nextPageToken, resultsInPage, filter};
    }),
);
