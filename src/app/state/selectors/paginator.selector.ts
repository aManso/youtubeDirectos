import { createSelector } from "@ngrx/store";
import { PaginatorState } from "src/app/core/models/paginator.state";

export const selectItemFeature = (state: PaginatorState) => state;

export const selectPaginatorLoading = createSelector(
    selectItemFeature, 
    (state: PaginatorState) => state.loading!!
)

export const selectPaginator = createSelector(
    selectItemFeature, 
    (state: PaginatorState) => state
)

