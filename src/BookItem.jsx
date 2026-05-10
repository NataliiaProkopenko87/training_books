function BookItem({ book, onDelete }) {

  const onDeleteClick = () => {
    onDelete(book.id);
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  )
}

export default BookItem;