import { useReducer, useEffect } from "react";
import { connect } from "react-redux";
import { categoryFilterSelected } from "../actions";
import { categoryFilterUnselected } from "../actions";
import { sorterFilterSelected } from "../actions";
import { sorterFilterUnselected } from "../actions";

const Checkbox = ({
  label,
  filterType,
  catFilterSelected,
  sortFilterSelected,
  catFilterUnselected,
  sortFilterUnselected,
}) => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    if (checked) {
      if (filterType === "Category") {
        catFilterSelected(label);
      } else if (filterType === "Sorter") {
        sortFilterSelected(label);
      }
    } else {
      if (filterType === "Category") {
        catFilterUnselected(label);
      } else if (filterType === "Sorter") {
        sortFilterUnselected(label);
      }
    }
  }, [checked]);

  return (
    <>
      <label htmlFor={label} className="checkbox-label">
        <input
          type="checkbox"
          id={label}
          className="checkbox-input"
          value={label}
          onChange={toggle}
        ></input>{" "}
        {label}
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  catFilters: state.appReducer.categoryFilters,
  sortFilters: state.appReducer.sorterFilters,
});

const mapDispatchToProps = (dispatch) => ({
  catFilterSelected: (filter) => dispatch(categoryFilterSelected(filter)),
  sortFilterSelected: (filter) => dispatch(sorterFilterSelected(filter)),
  catFilterUnselected: (filter) => dispatch(categoryFilterUnselected(filter)),
  sortFilterUnselected: (filter) => dispatch(sorterFilterUnselected(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
