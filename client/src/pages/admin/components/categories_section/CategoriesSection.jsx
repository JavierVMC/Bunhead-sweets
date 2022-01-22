import { TableCategories } from '../../../../components/table_categories/TableCategories';
import './categoriesSection.css';

export const CategoriesSection = () => {
  return (
    <div id="categories-section-admin">
      <h1>Categorias</h1>
      <TableCategories></TableCategories>
    </div>
  );
};
