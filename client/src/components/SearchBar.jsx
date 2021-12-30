export const SearchBar = () => {
  const onSearch = (e) => {
    e.preventDefault();

    const text = document.getElementById("searchBarInput").value.toLowerCase();
    let elementos = document.getElementsByClassName("news-container");
    if (text.length > 0) {
      for (let elemento of elementos) {
        if (elemento.innerText.toLowerCase().includes(text)) {
          elemento.classList.add("visible");
        } else {
          elemento.classList.add("hidden");
        }
      }
    } else {
      for (let elemento of elementos) {
        elemento.classList.remove("hidden");
        elemento.classList.add("visible");
      }
    }
  };

  return (
    <form className="d-flex" id="searchBar" onSubmit={onSearch}>
      <input
        className="form-control rounded"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        id="searchBarInput"
        aria-describedby="search-addon"
      ></input>
      <button className="btn btn-outline-primary" type="submit">
        &#x1f50d;&#xfe0e;
      </button>
    </form>
  );
};
