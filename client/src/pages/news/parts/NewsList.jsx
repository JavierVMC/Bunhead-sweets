import { NewsPreview } from "../../../components/NewsPreview";
import { RegularList } from "../../../components/RegularList";

export const NewsList = ({ newsInfoList }) => {
  return newsInfoList ? (
    <ul>
      <RegularList
        items={newsInfoList}
        resourceName="newsPreview"
        itemComponent={NewsPreview}
      ></RegularList>
    </ul>
  ) : (
    <p>Cargando...</p>
  );
};
