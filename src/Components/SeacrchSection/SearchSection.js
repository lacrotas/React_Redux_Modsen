import './SearchSection.scss';
import SeacrhComboBox from '../../parts/SearchComboBox/SeacrchComboBox.js';
import CustomSelect from '../../parts/CustomSelect/CustomSelect.js';
import LoadingModalWindow from '../LoadingModalWindow/LoadingModalWindow';
import BookResultGrid from '../BookResultGrid/BookResultGrid';
import axios from 'axios';
import { useState } from 'react';
import { setBook, removeBook } from '../../store/slices/bookSlice'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function SearchSection() {
  const [bookName, setBookName] = useState("");
  const [bookSorting, setBookSort] = useState("relevance");
  const [bookKategory, setBookKategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);//for play animation during data getting
  const [startingPosition, setStartingPosition] = useState(0);// index for load more
  const [isAllBooksLoaded, setIsAllBooksLoaded] = useState(true);// if we load all books hide the button

  const dispatch = useDispatch();
  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();                                          //+ "subject:"+ bookKategory (filter by category break all search)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&orderBy=" + bookSorting + "&key=" + process.env.REACT_APP_API_KEY + "&maxResults=30")
      .then(data => {
        setIsLoading(false);
        setBookArray(data.data.items, false);
        console.log(data.data.items);
        setIsAllBooksLoaded(false);
      })
  }
  function loadMore(event) {
    setIsLoading(true);
    event.preventDefault();                                          //+ "subject:"+ bookKategory (filter by category break all search)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&orderBy=" + bookSorting + "&key=" + process.env.REACT_APP_API_KEY + "&maxResults=30" + "&startIndex=" + startingPosition)
      .then(data => {
        setIsLoading(false);
        setBookArray(data.data.items, true);
        console.log(data.data.items);
      })
  }
  function handleChange(event) {
    setBookName(event.target.value);
    console.log(event.target.value);
  }
  function setBookArray(data, isLoadMore) {
    let books = [];
    setStartingPosition(startingPosition + data.length);
    console.log(data.length);
    if (data.length < 30) { setIsAllBooksLoaded(true); }
    if (!isLoadMore) {
      dispatch(removeBook());
    }
    for (let i = 0; i < data.length; i++) {
      books[i] = {
        id: i+startingPosition,
        author: data[i].volumeInfo.authors,
        description: data[i].volumeInfo.description,
        name: data[i].volumeInfo.title,
        imageSrc: data[i].volumeInfo.imageLinks.smallThumbnail,
        category: data[i].volumeInfo.categories,
      };
      console.log("dataGet");
      dispatch(setBook(books[i]));
    }
  }
  return (
    <div>
      <div className="SearchSection">
        <h2 className='SearchSection_label'>Search for books</h2>
        <div className='SearchSection_container'>
          <form onSubmit={handleSubmit}>
            <TextField className='container_input---search' label="Book name" variant="outlined" onChange={handleChange} required />
            <button className='container_button---submit' type="submit"><SearchIcon /></button>
            <div className='container_select'>
              <SeacrhComboBox setKategory={setBookKategory} />
              <CustomSelect setSorting={setBookSort} />
            </div>
          </form>
          {(isLoading) ? <LoadingModalWindow /> : <p></p>}
        </div>
      </div>
      <BookResultGrid />
      {(!isAllBooksLoaded) ? <Button className='loadMore_button' variant="outlined" onClick={loadMore}>Load more </Button> : <p></p>}
    </div>
  );
}

export default SearchSection;

