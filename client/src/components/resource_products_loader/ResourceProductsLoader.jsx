import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

const ResourceProductsLoader = ({
  resourceUrl,
  resourceName,
  children,
  categoryFilters,
  sorterFilters,
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();

      let productsFiltered = [];

      if (categoryFilters != null && categoryFilters.length > 0) {
        for (let i = 0; i < categoryFilters.length; i++) {
          productsFiltered = data.filter(
            (product) => product.category === categoryFilters[i]
          );
        }
      } else {
        productsFiltered = data;
      }

      if (sorterFilters != null && sorterFilters.length > 0) {
        for (let i = 0; i < sorterFilters.length; i++) {
          if (sorterFilters[i] === "Precio mas bajo") {
            // sort by price ascending
            productsFiltered.sort((x, y) => {
              return x.price - y.price;
            });
          }
          if (sorterFilters[i] === "Precio mas alto") {
            // sort by price descending
            productsFiltered.sort((x, y) => {
              return y.price - x.price;
            });
          }
          // sort by name A-Z
          if (sorterFilters[i] === "A - Z") {
            productsFiltered.sort((x, y) => {
              let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // sort by name Z-A
          if (sorterFilters[i] === "Z - A") {
            productsFiltered.sort((x, y) => {
              let a = y.name.toUpperCase(),
                b = x.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // sort by category A-Z
          if (sorterFilters[i] === "Categoria") {
            productsFiltered.sort((x, y) => {
              let a = x.category.toUpperCase(),
                b = y.category.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
        }
      }

      setState(productsFiltered);
    })();
  }, [resourceUrl, categoryFilters, sorterFilters]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  categoryFilters: state.appReducer.categoryFilters,
  sorterFilters: state.appReducer.sorterFilters,
});

export default connect(mapStateToProps)(ResourceProductsLoader);
