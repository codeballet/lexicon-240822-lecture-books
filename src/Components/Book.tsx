interface BookInterface {
    title: string;
    author: string;
    isbn: number;
    genre?: Array<string>;
    rating: number;
    cover?: string;
}
function Book({ book }: { book: BookInterface }) {
    return (
        <article>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
        </article>
    )
};
export default Book;