import './salesReport.css';

export const SalesReport = ({ salesReport }) => {
  const { title, date, from, to, total_incomes, products_sold } =
    salesReport || {
      title: 'Cargando...',
      date: 'Cargando...',
      from: 'Cargando...',
      to: 'Cargando...',
      total_incomes: 'Cargando...',
      products_sold: 'Cargando...'
    };

  return (
    <div className="sales-report-container">
      <h2>{title}</h2>
      <p>
        Realizado: <span className="report-dates">{date}</span>
      </p>
      <p>
        Desde: <span className="report-dates">{from}</span>
      </p>
      <p>
        Hasta: <span className="report-dates">{to}</span>
      </p>
      <p>
        Total de ingresos:{' '}
        <span className="report-incomes">${total_incomes}</span>
      </p>
      <h3>Productos vendidos</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {products_sold.map((product, i) => (
              <tr key={i}>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
