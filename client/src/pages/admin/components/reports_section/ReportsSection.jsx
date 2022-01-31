import { ResourceLoader } from '../../../../components/resource_loader/ResourceLoader';
import { ReportsList } from './components/reports_list/ReportsList';
import { ReportCreator } from './components/report_creator/ReportCreator';
import './reportsSection.css';

export const ReportsSection = () => {
  return (
    <div id="reports-section-admin">
      <ReportCreator></ReportCreator>
      <h1>Reportes de ventas generados</h1>
      <ResourceLoader
        resourceUrl="http://localhost:3001/api/report"
        resourceName="reportsList"
      >
        <ReportsList></ReportsList>
      </ResourceLoader>
    </div>
  );
};
