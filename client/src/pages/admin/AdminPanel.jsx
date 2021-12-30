import { Graph } from "../../components/Graph";

export const AdminPanel = () => {
  return (
    <div className="adminPanel">
      <div className="container">
        <div className="section-title">
          <h1>Panel de control</h1>
        </div>
        <Graph></Graph>
      </div>
    </div>
  );
};
