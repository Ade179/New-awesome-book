  let bookCollection = [];

function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let book = { title: title, author: author };
  bookCollection.push(book);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
}

function removeBook(index) {
  bookCollection = bookCollection.filter((book, i) => i !== index);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
}

function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  for (let i = 0; i < bookCollection.length; i++) {
    let book = bookCollection[i];
    let li = document.createElement("li");
    li.innerHTML = `${book.title} by ${book.author} <button onclick="removeBook(${i})">Remove</button>`;
    bookList.appendChild(li);
  }
}

// Load saved book collection from localStorage
let savedBookCollection = localStorage.getItem("bookCollection");
if (savedBookCollection) {
  bookCollection = JSON.parse(savedBookCollection);
}
displayBooks();
