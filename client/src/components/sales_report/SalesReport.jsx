import './salesReport.css';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';

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

  const newDate = new Date(date).toLocaleString();
  const newFrom = new Date(from).toLocaleString();
  const newTo = new Date(to).toLocaleString();

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (deleting) {
      async function deleteReport() {
        fetch(`http://localhost:3001/api/report/${title}`, {
          method: 'DELETE'
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }

      deleteReport();
    }
  }, [deleting, title]);

  return (
    <div className={deleting ? 'report-deleted' : 'sales-report-container'}>
      <button
        className="btn btn-primary delete-report"
        onClick={() => setDeleting(true)}
      >
        <FaTrash></FaTrash>
      </button>
      <h2>{title}</h2>
      <p>
        Realizado: <span className="report-dates">{newDate}</span>
      </p>
      <p>
        Desde: <span className="report-dates">{newFrom}</span>
      </p>
      <p>
        Hasta: <span className="report-dates">{newTo}</span>
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
