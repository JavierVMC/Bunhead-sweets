import { TableProducts } from '../../../../components/table_products/TableProducts';
import { ProductCreator } from './components/product_creator/ProductCreator';
import './productsSection.css';

export const ProductsSection = () => {
  return (
    <div id="products-section-admin">
      <h1>Productos</h1>
      <ProductCreator></ProductCreator>
      <TableProducts></TableProducts>
    </div>
  );
};
