document.addEventListener('DOMContentLoaded', function () {
  // Mock data for demonstration purposes
  const books = [
    { id: 'book2', title: 'Divergent', image: 'Divergent.jpg' },
    { id: 'book6', title: 'Insurgent', image: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Insurgent_%28book%29.jpeg' },
    { id: 'book7', title: 'Allegiant', image: 'https://booknet.com.pk/wp-content/uploads/2021/05/91UojRVuHKL.jpg' },
    { id: 'book3', title: 'A Wrinkle in Time', image: 'wrinkle.jpg' },
    { id: 'book8', title: 'Glitter, Wings and Magic', image: 'https://m.media-amazon.com/images/I/61pdPRcbeML._AC_UF894,1000_QL80_.jpg' },
    { id: 'book4', title: 'The Inheritance Games', image: 'inheritence.jpg' },
    { id: 'book5', title: 'The Hawthorne Legacy', image: 'legacy.jpg' },
    { id: 'book1', title: 'The Final Gambit', image: 'finalGambit.jpg' },
    { id: 'book9', title: 'Tresure Island', image: 'https://www.penguinreaders.co.uk/wp-content/uploads/2023/11/9780241636725.jpg' },
    { id: 'book10', title: 'Girl in Pieces', image: 'https://static-01.daraz.pk/p/49e01f4ea896a7bee6426171d107f79d.jpg' },
  ];

  // Function to filter books based on the search input
  function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
    updateBookList(filteredBooks);
  }

  // Function to update the book list with filtered data
  function updateBookList(filteredBooks) {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = '';

    filteredBooks.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book';
      bookItem.innerHTML = `
        <a href="book${book.id}.html">
          <img src="${book.image}" alt="${book.title}">
          <p>${book.title}</p>
        </a>
      `;
      bookListContainer.appendChild(bookItem);
    });
  }

  // Populate the book list dynamically
  const bookListContainer = document.getElementById('bookList');
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book';
    bookItem.innerHTML = `
      <a href="book${book.id}.html">
        <img src="${book.image}" alt="${book.title}">
        <p>${book.title}</p>
      </a>
    `;
    bookListContainer.appendChild(bookItem);
  });
});

