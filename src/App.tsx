import { useState } from 'react';
import './App.css'
import Book from './Components/Book';

interface BookInterface {
  title: string;
  author: string;
  isbn: number;
  genre?: Array<string>;
  rating: number;
  cover?: string;
}

function App() {
  const [bookList, setBookList] = useState<BookInterface[]>([
    {
      title: "Ulysses",
      author: "James Joyce",
      isbn: 9872345,
      rating: 4,
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/JoyceUlysses2.jpg/440px-JoyceUlysses2.jpg",
    },
    {
      title: "The World of Robert Jordan's The Wheel of Time",
      author: "Robert Jordan & Teresa Patterson",
      isbn: 9872995,
      genre: ["Fact"],
      rating: 3,
      cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3lw6kI6NA_0C8YvSNS7MdgHaJb%26pid%3DApi&f=1&ipt=d33259435c45a6f9c52a769200997105f5f5ca82007743421924a9b292b5f696&ipo=images",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      isbn: 8982995,
      genre: ["Science Fiction", "Drama"],
      rating: 5,
      cover: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
    },
    {
      title: "The Wheel of Time Companion",
      author: "Robert Jordan, Harriet McDougal, Alan Romanczuk, Maria Simons",
      isbn: 9781250256409,
      genre: ["Reference", "Fantasy"],
      rating: 4,
      cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KPRM86IcPfB9SE9x05FbkAHaLQ%26pid%3DApi%26h%3D160&f=1&ipt=6dd9ba7458cb891b43949f140d8943b8fb014d8421afbf7d8bfccd0222d1801d&ipo=images"
    },
    {
      title: "The World of Ice & Fire: The Untold History of Westeros and the Game of Thrones",
      author: "George R.R. Martin, Elio M. García Jr., Linda Antonsson",
      isbn: 9780553805444,
      genre: ["Fantasy", "History"],
      rating: 4,
      cover: "https://duckduckgo.com/i/6425e8ba.jpg"
    }
  ]);

  function updateBookList(updatedBook: BookInterface) {
    let index = bookList.findIndex((book) => book.isbn === updatedBook.isbn);
    let updatedBookList = [...bookList];
    updatedBookList.splice(index, 1, updatedBook);
    setBookList(updatedBookList)
  };

  return (
    <main>
      <h2>My books:</h2>
      {
        bookList.map((book, i) => (
          <Book key={i} book={book} updateBook={updateBookList} />
        ))
      }
    </main>
  )
}
export default App;