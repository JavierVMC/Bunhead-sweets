import { CATEGORY_FILTER_SELECTED } from '../actions/actions';
import { SORTER_FILTER_SELECTED } from '../actions/actions';
import { CATEGORY_FILTER_UNSELECTED } from '../actions/actions';
import { SORTER_FILTER_UNSELECTED } from '../actions/actions';

const filtersInitialState = {
  categoryFilters: [],
  sorterFilters: []
};

export const filtersR = (state = filtersInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_FILTER_SELECTED: {
      return {
        ...state,
        categoryFilters: [...state.categoryFilters, payload]
      };
    }
    case SORTER_FILTER_SELECTED: {
      return {
        ...state,
        sorterFilters: [...state.sorterFilters, payload]
      };
    }
    case CATEGORY_FILTER_UNSELECTED: {
      return {
        ...state,
        categoryFilters: state.categoryFilters.filter(
          (filter) => filter !== payload
        )
      };
    }
    case SORTER_FILTER_UNSELECTED: {
      return {
        ...state,
        sorterFilters: state.sorterFilters.filter(
          (filter) => filter !== payload
        )
      };
    }
    default: {
      return state;
    }
  }
};
