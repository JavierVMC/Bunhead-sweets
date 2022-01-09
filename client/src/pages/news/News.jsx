import { NewsList } from './components/news_list/NewsList';
import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import { SearchBar } from '../../components/search_bar/SearchBar';
import './news.css';

export const News = () => {
  return (
    <div id="news">
      <div id="titulo">
        <h1>Noticias</h1>
      </div>
      <div className="container">
        <SearchBar></SearchBar>
        <ResourceLoader resourceUrl="/news.json" resourceName="newsInfoList">
          <NewsList></NewsList>
        </ResourceLoader>
      </div>
    </div>
  );
};
