import ProductList from "./parts/ProductList";
import { SplitScreen } from "../../components/SplitScreen";
import { Filters } from "./parts/Filters";
import ResourceProductsLoader from "../../components/ResourceProductsLoader";
import { useRef, useEffect } from "react";

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
