import { RegularList } from '../../../../../../components/regular_list/RegularList';
import { SalesReport } from '../../../../../../components/sales_report/SalesReport';

export const ReportsList = ({ reportsList }) => {
  return reportsList ? (
    <>
      <RegularList
        items={reportsList}
        resourceName="salesReport"
        itemComponent={SalesReport}
      ></RegularList>
    </>
  ) : (
    <p>Cargando...</p>
  );
};
