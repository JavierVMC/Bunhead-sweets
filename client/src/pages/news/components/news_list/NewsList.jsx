import { NewsPreview } from '../../../../components/news_preview/NewsPreview';
import { RegularList } from '../../../../components/regular_list/RegularList';

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
