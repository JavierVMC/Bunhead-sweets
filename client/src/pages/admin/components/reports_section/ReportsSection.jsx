import { ResourceLoader } from '../../../../components/resource_loader/ResourceLoader';
import { ReportsList } from './components/reports_list/ReportsList';
import './reportsSection.css';

export const ReportsSection = () => {
  return (
    <div id="reports-section-admin">
      <h1>Reportes</h1>
      <ResourceLoader
        resourceUrl="http://localhost:3001/api/report"
        resourceName="reportsList"
      >
        <ReportsList></ReportsList>
      </ResourceLoader>
    </div>
  );
};
