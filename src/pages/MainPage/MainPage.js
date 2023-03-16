import SearchSection from '../../components/SeacrchSectionForm/SeacrchSectionForm.js';
import './MainPage.scss';
import { useState } from 'react';
import BookResultGrid from '../../components/BookResultGrid/BookResultGrid.js';
import axios from 'axios';
import { setBook, removeBook } from '../../store/slices/bookSlice';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LoadingModalWindow from '../../components/LoadingModalWindow/LoadingModalWindow';

function MainPage() {
    const [bookName, setBookName] = useState("");
    const [bookSorting, setBookSort] = useState("relevance");
    const [bookKategory, setBookKategory] = useState("");
    const [startingPosition, setStartingPosition] = useState(0);// index for load more
    const [isLoading, setIsLoading] = useState(false);//for play animation during data getting
    const [isAllBooksLoaded, setIsAllBooksLoaded] = useState(true);// if we load all books hide the button
    const dispatch = useDispatch(); // for using storege

    function handleSubmit(event) {
        setIsLoading(true);
        event.preventDefault();
        setStartingPosition(0);             //+ "subject:"+ bookKategory (filter by category break all search)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&orderBy=" + bookSorting + "&key=" + process.env.REACT_APP_API_KEY + "&maxResults=30")
            .then(data => {
                setIsLoading(false);
                setBookArray(data.data.items, false);
                setIsAllBooksLoaded(false);
            })
    }
    function loadMore(event) {
        setIsLoading(true);
        event.preventDefault();                                //+ "subject:"+ bookKategory (filter by category break all search)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&orderBy=" + bookSorting + "&key=" + process.env.REACT_APP_API_KEY + "&maxResults=30" + "&startIndex=" + startingPosition)
            .then(data => {
                setIsLoading(false);
                setBookArray(data.data.items, true);
            })
    }
    function setBookArray(data, isLoadMore) {
        let books = [];
        setStartingPosition(startingPosition + data.length);
        if (!isLoadMore) {
            dispatch(removeBook());
        }
        for (let i = 0; i < data.length; i++) {
            books[i] = {
                id: i + startingPosition,
                author: data[i].volumeInfo.authors,
                description: data[i].volumeInfo.description,
                name: data[i].volumeInfo.title,
                imageSrc: data[i].volumeInfo.imageLinks.smallThumbnail || 'none',
                category: data[i].volumeInfo.categories,
            };
            dispatch(setBook(books[i]));
        }
    }

    return (
        <div className="MainPage">
            <SearchSection handleSubmit={handleSubmit} setBookName={setBookName} setBookSort={setBookSort} setBookKategory={setBookKategory} />
            <BookResultGrid />
            {(isLoading) ? <LoadingModalWindow /> : null}
            {(!isAllBooksLoaded) ? <Button className='loadMore_button' variant="outlined" onClick={loadMore}>Load more </Button> : null} 
        </div>

    );
}

export default MainPage;
