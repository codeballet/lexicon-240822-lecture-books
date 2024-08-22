import './Book.css';
interface BookInterface {
    title: string;
    author: string;
    isbn: number;
    genre?: Array<string>;
    rating: number;
    cover?: string;
}
function Book({ book }: { book: BookInterface }) {

    let stars = [];
    for (let i = 0; i < book.rating; i++) {
        stars.push(<span key={i}>⭐</span>)
    }

    return (
        <article className="book-container">
            <figure style={{ backgroundImage: `url(${book.cover})`}}></figure>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <p>Genre: {book.genre ? book.genre.join(", ") : "Not defined"}</p>
            <p>{stars}</p>
        </article>
    )
};
export default Book;