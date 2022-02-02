import { useEffect } from 'react';
import { useState } from 'react';

import './reportCreator.css';

export const ReportCreator = () => {
  const [creating, setCreating] = useState(false);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (generating) {
      const title = document.querySelector('#title-new-report').value;
      const initialDate = document.querySelector('#initial-date').value;
      const finalDate = document.querySelector('#final-date').value;

      async function createNewReport() {
        fetch('http://localhost:3001/api/order/report/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: initialDate,
            to: finalDate
          })
        })
          .then((response) => response.json())
          .then((data) => {
            fetch('http://localhost:3001/api/report', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title: title,
                from: initialDate,
                to: finalDate,
                ...data
              })
            });
          })
          .catch((err) => console.log(err));
      }

      createNewReport();
      setCreating(true);
    }
  }, [generating]);

  return (
    <div id="report-creator-container">
      {!creating ? (
        <>
          <h2>Generar reporte de ventas</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGenerating(true);
            }}
          >
            <div>
              <label htmlFor="title-new-report">Titulo del reporte: </label>
              <input type="text" id="title-new-report" required></input>
            </div>
            <div>
              <label htmlFor="initial-date">Desde: </label>
              <input type="date" id="initial-date" required></input>
            </div>
            <div>
              <label htmlFor="final-date">Hasta: </label>
              <input type="date" id="final-date" required></input>
            </div>

            <button type="submit" className="btn btn-primary">
              Generar reporte
            </button>
          </form>
        </>
      ) : (
        <>
          <span>Reporte generado exitosamente</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              setCreating(false);
              setGenerating(false);
            }}
          >
            Generar otro reporte
          </button>
        </>
      )}
    </div>
  );
};
