export const NewsPreview = ({ newsPreview }) => {
  const { title, date, description } = newsPreview || {
    title: "Cargando...",
    date: "Cargando...",
    description: "Cargando...",
  };

  return (
    <div className="news-container">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};
