export type Action<T = any> = {
  type: string;
  payload: T;
};

export type ActiveCategories = {
  id: number;
};

export interface FiltersState {
  activeCategories: Array<ActiveCategories>;
}
