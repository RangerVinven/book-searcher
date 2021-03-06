import { useState } from "react";
import "./App.css";

import SearchArea from "./components/homePage/SearchArea";
import BookResults from "./components/homePage/BookResult";



function App() {

  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState({});

  const searchBook = () => {
    
    // Calling the Google Books API
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=AIzaSyDAzw9IvHlX_qf-euw5u_XkYN42THF7r1U`)
    .then(response => response.json()).then(results => {
      setBooks(results);
    });
  }

  return (
    <div>
      <div className="flex justify-center mb-8">
        <SearchArea buttonOnClick={searchBook} updateBookTitle={setBookTitle} bookTitleProp={bookTitle} />
      </div>

      <div className="flex justify-center mt-8 mb-8">
        {/* <BookResults thumbnailSrc="http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" bookTitle="Harry Potter and the Cursed Child" author="J.K Rownling" desc="The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places. The playscript for Harry Potter and the Cursed Child was originally released as a 'special rehearsal edition' alongside the opening of Jack Thorne's play in London's West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller. This revised paperback edition updates the 'special rehearsal edition' with the conclusive and final dialogue from the play, which has subtly changed since its rehearsals, as well as a conversation piece between director John Tiffany and writer Jack Thorne, who share stories and insights about reading playscripts. This edition also includes useful background information including the Potter family tree and a timeline of events from the wizarding world prior to the beginning of Harry Potter and the Cursed Child" ISBN10="0751565369" ISBN13="9780751565362" /> */}
        {books.items.map(book => {
          <BookResults thumbnailSrc={book.imageLinks.smallThumbnail} bookTitle={book.volumeInfo.title} author={book.volumeInfo.authors} desc={book.volumeInfo.description} ISBN10={book.volumeInfo.industryIdentifiers[0].identifier} ISBN13={book.volumeInfo.industryIdentifiers[1].identifier}/>
        })}
      </div>

      
      
    </div>
  );
}

export default App;
