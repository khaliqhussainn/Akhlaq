import React, { useState } from "react";
const booksData = [
  {
    title: "aghlat ki tasheeh aur mushkil alfaz ki tashreeh",
    price: 22.99,
    pages: 94,
    language: "Urdu | Arabic ",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_aghlat-ki-tasheeh-aur-mushkil-alfaz-ki-tashreeh-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "Akhlaq-e-Rasool-e-Akram",
    price: 22.99,
    pages: 191,
    language: "Urdu | Arabic ",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_akhlaq-e-rasool-e-akram-part-001-002-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "Jamhuri daur me islam ki kamiyab rahnumai",
    price: 14.99,
    pages: 113,
    language: "Urdu | Islamiyat",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_jamhuri-daur-me-islam-ki-kamiyab-rahnumai-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "mujaddid-e-islam shah waliullah",
    price: 22.99,
    pages: 86,
    language: "Urdu | Biography",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_mujaddid-e-islam-shah-waliullah-aur-unka-nasabi-aur-fikri-khandan-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "maulana azad ki qurani baseerat",
    price: 22.99,
    pages: 375,
    language: "Urdu",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_maulana-azad-ki-qurani-baseerat-akhlaq-husain-qasmi-ebooks-1.jpg",
  },
  {
    title: "basair-ul-quran",
    price: 19.99,
    pages: 240,
    language: "Urdu | Islamic",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_basair-ul-quran-volume-003-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "jang-e-aazadi aur ulama-e-devband",
    price: 22.99,
    pages: 53,
    language: "Urdu",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_jang-e-aazadi-aur-ulama-e-devband-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "dilli gahwarah-e-muhaddiseen",
    price: 22.99,
    pages: 180,
    language: "Urdu",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_dilli-gahwarah-e-muhaddiseen-akhlaq-husain-qasmi-ebooks.jpg",
  },
  {
    title: "shohada-e-haq",
    price: 19.99,
    pages: 81,
    language: "Urdu",
    imgUrl:
      "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_shohada-e-haq-akhlaq-husain-qasmi-ebooks.jpg",
  },
];

const BooksComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Publish date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredBooks.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const filteredBooks = booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.language.includes(searchTerm)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "Price":
          return a.price - b.price;
        case "Page count":
          return a.pages - b.pages;
        default:
          return 0;
      }
    });

  return (
    <section className="section-book" id="books"> 
      <div className="columns">
        <div className="column is-3"></div>

        <div className="column">
          <h1 className="title">Books</h1>
          <nav className="level">
            <div className="level-left">
              {/* <div className="level-item">
                <p className="subtitle is-5">
                  <strong>{filteredBooks.length}</strong> books
                </p>
              </div> */}

              <div className="book-head">
                <div className="level-item is-hidden-tablet-only">
                  <div className="field">
                    <form action="#" class="search">
                    <p className="control">
                      <button class="search__button button" onClick={handleSearch}>
                        <div class="search__icon">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <title>magnifying-glass</title>
                            <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                          </svg>
                        </div>
                      </button>
                      </p>
                      <p className="control">
                        <input
                          type="text"
                          class="search__input"
                        //   className="input"
                          placeholder="Book name, language..."
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                      </p>
                    </form>
                  </div>
                </div>

                <div className="level-right">
                  <div className="select">
                    <select value={sortOption} onChange={handleSortChange}>
                      <option>Publish date</option>
                      <option>Price</option>
                      <option>Page count</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="columns is-multiline">
            {filteredBooks.map((book, index) => (
              <div key={index} className="column is-4-tablet is-3-desktop">
                <article className="box">
                  <div className="media">
                    <aside className="media-left">
                      <img src={book.imgUrl} alt={book.title} width="80" />
                    </aside>
                    <div className="media-content">
                      <p className="title">
                        <a href="/edit-book">{book.title}</a>
                      </p>
                      <p className="subtitle ">
                        ${book.price.toFixed(2)}
                      </p>
                      <div className="content is-small">
                        {book.pages} pages
                        <br />
                        language: {book.language}
                        <br />
                        <a href="/edit-book">Edit</a> . <a>Delete</a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* <nav className="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next Page</a>
          </nav> */}
            {/* <ul className="pagination-list">
              <li>
                <a className="pagination-link">1</a>
              </li>
              <li>
                <a className="pagination-ellipsis">&hellip;</a>
              </li>
              <li>
                <a className="pagination-link is-current">46</a>
              </li>
              <li>
                <a className="pagination-ellipsis">&hellip;</a>
              </li>
              <li>
                <a className="pagination-link">86</a>
              </li>
            </ul> */}

            <nav className="pagination">
            <button
              className="pagination-previous button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="pagination-next button"
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(filteredBooks.length / itemsPerPage)}
            >
              Next Page
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BooksComponent;
