import { useEffect } from 'react';
import { useState } from 'react';

import './reportCreator.css';

export const ReportCreator = () => {
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    // llamar al end point de fabrizzio
    setCreating(false);
  }, [creating]);

  return (
    <div id="report-creator-container">
      <h2>Generar reporte de ventas</h2>
      <form onSubmit={() => setCreating(true)}>
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
    </div>
  );
};
