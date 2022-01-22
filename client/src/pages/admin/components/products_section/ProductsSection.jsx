import { TableProducts } from '../../../../components/table_products/TableProducts';
import './productsSection.css';

export const ProductsSection = () => {
  return (
    <div id="products-section-admin">
      <h1>Productos</h1>
      <TableProducts></TableProducts>
    </div>
  );
};
