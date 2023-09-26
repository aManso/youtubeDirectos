import { createAction, props } from "@ngrx/store";
import { PaginatorState } from "src/app/core/models/paginator.state";

export const ACTIONS = {
    loadingPages: '[Paginator] loading pages',
    loadedPaginator: '[Paginator] loaded pages',
}

export const actionLoadingPages = createAction(
    ACTIONS.loadingPages
);

export const actionLoadedPages = createAction(
    ACTIONS.loadedPaginator,
    props<PaginatorState>()
);

