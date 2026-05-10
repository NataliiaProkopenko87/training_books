import BookItem from "./BookItem";

function BookList({ books, onDelete }) {
  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default BookList;