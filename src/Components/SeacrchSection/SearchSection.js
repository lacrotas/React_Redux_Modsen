import './SearchSection.scss';
import SeacrhComboBox from '../SearchComboBox/SeacrchComboBox.js';
import CustomSelect from '../CustomSelect/CustomSelect.js';
import axios from 'axios';
import { useState } from 'react';
import { setBook, removeBook } from '../../Store/slices/bookSlice'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function SearchSection() {

  const [bookName, setBookName] = useState("");
  const [APIKey, setAPIKey] = useState("AIzaSyDGnD4TeyE13Um-gOReRiGYFOhH9dzGsO8");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&key=" + APIKey)//"&maxResults=40"
        .then(data => {
          setBookArray(data.data.items);
        })
  }
  function handleChange(event) {
    setBookName(event.target.value);
  }
  function setBookArray(data) {
    let books = [];
    dispatch(removeBook());
    for (let i = 0; i < data.length; i++) {
      books[i] = {
        id: i,
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
    <div className="SearchSection">
      <h2 className='SearchSection_label'>Search for books</h2>
      <div className='SearchSection_container'>
        <form onSubmit={handleSubmit}>
          <TextField className='container_input---search' label="Outlined" variant="outlined" onChange={handleChange} required/>
          <button className='container_button---submit' type="submit"><SearchIcon /></button>
          <div className='container_select'>
            <SeacrhComboBox />
            <CustomSelect />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchSection;

