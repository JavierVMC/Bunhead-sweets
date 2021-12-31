import Checkbox from '../../../../components/checkbox/Checkbox';

export const Filters = () => {
  return (
    <div className="filters-container">
      <span className="text-left">Categorias</span>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked={true} disabled={true}></input>{' '}
            {'Todo'}
          </label>
        </li>
        <li>
          <Checkbox label="Torta" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Galletas" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Cupcake" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Panes" filterType="Category"></Checkbox>
        </li>
      </ul>
      <span className="text-left">Ordenar por</span>
      <ul>
        <li>
          <Checkbox label="Categoria" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Precio mas alto" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Precio mas bajo" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="A - Z" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Z - A" filterType="Sorter"></Checkbox>
        </li>
      </ul>
    </div>
  );
};
