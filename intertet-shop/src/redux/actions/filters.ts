import { ADD_CATEGORY_TO_FILTER, REMOVE_CATEGORY_FROM_FILTER } from "~/redux/actionTypes";
import { Action } from "~/types/Redux";




export const addCategoryToFilter = ({category}: any) => ({
  type: ADD_CATEGORY_TO_FILTER,
  payload: {
    category,
  },
});

export const removeCategoryFromFilter = ({id}: {id: number}) => ({
  type: REMOVE_CATEGORY_FROM_FILTER,
  payload: {
    id,
  },
});
