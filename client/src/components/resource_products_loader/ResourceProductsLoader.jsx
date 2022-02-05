import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

const ResourceProductsLoader = ({
  resourceUrl,
  resourceName,
  children,
  categoryFilters,
  sorterFilters
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'http://localhost:3001/api/product/is_available'
      );
      const data = await response.json();

      let productsFiltered = [];

      if (categoryFilters != null && categoryFilters.length > 0) {
        for (let i = 0; i < categoryFilters.length; i++) {
          for (let product of data) {
            const response2 = await fetch(
              `http://localhost:3001/api/product_category/${product.category_id}`
            );
            const data2 = await response2.json();
            if (data2.name === categoryFilters[i]) {
              productsFiltered.push(product);
            }
          }
        }
      } else {
        productsFiltered = data;
      }

      if (sorterFilters != null && sorterFilters.length > 0) {
        for (let i = 0; i < sorterFilters.length; i++) {
          if (sorterFilters[i] === 'Precio mas bajo') {
            // sort by price ascending
            productsFiltered.sort((x, y) => {
              return x.price - y.price;
            });
          }
          if (sorterFilters[i] === 'Precio mas alto') {
            // sort by price descending
            productsFiltered.sort((x, y) => {
              return y.price - x.price;
            });
          }
          // sort by name A-Z
          if (sorterFilters[i] === 'A - Z') {
            productsFiltered.sort((x, y) => {
              let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // sort by name Z-A
          if (sorterFilters[i] === 'Z - A') {
            productsFiltered.sort((x, y) => {
              let a = y.name.toUpperCase(),
                b = x.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // // sort by category A-Z
          // if (sorterFilters[i] === 'Categoria') {
          //   productsFiltered.sort(async (x, y) => {
          //     const response3 = await fetch(
          //       `http://localhost:3001/api/product_category/${x.category_id}`
          //     );
          //     const data3 = await response3.json();

          //     const response4 = await fetch(
          //       `http://localhost:3001/api/product_category/${y.category_id}`
          //     );
          //     const data4 = await response4.json();

          //     console.log(data3.name);
          //     console.log(data4.name);
          //     let a = data3.name.toUpperCase();
          //     let b = data4.name.toUpperCase();
          //     return a === b ? 0 : a > b ? 1 : -1;
          //   });
          //   console.log(productsFiltered);
          // }
        }
      }

      console.log('data filtered');
      console.log(productsFiltered);
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
  categoryFilters: state.filtersR.categoryFilters,
  sorterFilters: state.filtersR.sorterFilters
});

export default connect(mapStateToProps)(ResourceProductsLoader);
