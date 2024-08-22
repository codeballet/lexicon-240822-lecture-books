import { useState } from 'react';
import './Book.css';
interface BookInterface {
    title: string;
    author: string;
    isbn: number;
    genre?: Array<string>;
    rating: number;
    cover?: string;
}
function Book({ book, updateBook }: { book: BookInterface, updateBook: (updatedBook: BookInterface) => void }) {
    const [edit, setEdit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(book.title);
    const [author, setAuthor] = useState<string>(book.author);
    const [isbn, _] = useState<number>(book.isbn);
    const [rating, setRating] = useState<number>(book.rating);

    let stars = [];
    for (let i = 0; i < book.rating; i++) {
        stars.push(<span key={i}>⭐</span>)
    }

    const handleEdit = () => {
        const updatedBook: BookInterface = {
            title: title,
            author: author,
            isbn: isbn,
            rating: rating,
        }
        updateBook(updatedBook);
        setEdit(false);
    };

    return (

        <article className="book-container">{edit ?
            <>
                <figure style={{ backgroundImage: `url(${book.cover})` }}></figure>
                <input defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                <input defaultValue={author} onChange={(e) => setAuthor(e.target.value)} />
                <p>{book.isbn}</p>
                <p>Genre: {book.genre ? book.genre.join(", ") : "Not defined"}</p>
                <input max="5" min="1" type='number' defaultValue={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
                <button onClick={handleEdit}>Confirm</button>
            </>
            :
            <>
                <figure style={{ backgroundImage: `url(${book.cover})` }}></figure>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.isbn}</p>
                <p>Genre: {book.genre ? book.genre.join(", ") : "Not defined"}</p>
                <p>{stars}</p>
                <button onClick={() => { setEdit(true) }}>Edit</button>
            </>
        }
        </article>

    )
};
export default Book;