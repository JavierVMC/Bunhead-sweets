import ProductList from './components/product_list/ProductList';
import { SplitScreen } from '../../components/split_screen/SplitScreen';
import { Filters } from './components/filters/Filters';
import ResourceProductsLoader from '../../components/resource_products_loader/ResourceProductsLoader';
import { useRef, useEffect } from 'react';

import './shop.css';

export const Shop = () => {
  const isMountedRef = useRef(true);
  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );
  return (
    <div>
      <div id="shop">
        <div className="container">
          <div className="shop-splitscreen">
            <SplitScreen leftWeight={1} rightWeight={3}>
              <Filters></Filters>
              <ResourceProductsLoader
                resourceUrl="/products.json"
                resourceName="productsList"
              >
                <ProductList></ProductList>
              </ResourceProductsLoader>
            </SplitScreen>
          </div>
        </div>
      </div>
    </div>
  );
};
