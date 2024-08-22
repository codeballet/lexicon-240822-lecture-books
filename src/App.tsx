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
      cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51Tx7mN5AML._SX331_BO1%2C204%2C203%2C200_.jpg&f=1&ipt=5f65d4b3e2e26e5c626e279cc59cbf3e44b7a1c394b5b0d7d5a0a5edec03e46b&ipo=images"
    },
    {
      title: "The World of Ice & Fire: The Untold History of Westeros and the Game of Thrones",
      author: "George R.R. Martin, Elio M. García Jr., Linda Antonsson",
      isbn: 9780553805444, 
      genre: ["Fantasy", "History"],
      rating: 4,
      cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeorgerrmartin.com%2Fgallery%2FImages%2FTWOIF_Cover.jpg&f=1&ipt=30c2a92c7c91c7814bbfa95b023c7d34d1c2db787c7b60119be77cb2d4493f00&ipo=images"
    }
  ]);
  return (
    <main>
      <h2>My books:</h2>
      {
        bookList.map((book) => (
          <Book book={book}/>
        ))
      }
    </main>
  )
}
export default App;