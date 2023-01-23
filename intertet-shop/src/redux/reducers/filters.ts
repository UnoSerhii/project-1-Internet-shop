import { ADD_CATEGORY_TO_FILTER, REMOVE_CATEGORY_FROM_FILTER } from "~/redux/actionTypes";
import { Action, FiltersState } from "~/types/Redux";



const initialState: FiltersState = {
  activeCategories: [],
};

const filters = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_CATEGORY_TO_FILTER:
      return {
        ...state,
        activeCategories: [...state.activeCategories, payload.category],
      };
    case REMOVE_CATEGORY_FROM_FILTER:
      return {
        ...state,
        activeCategories: state.activeCategories.filter((category) => category.id !== payload.id),
      };
    default:
      return state;
  }
};

export default filters;
