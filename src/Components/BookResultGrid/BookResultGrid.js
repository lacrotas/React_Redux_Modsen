import BookGridPreview from '../BookGridPreview/BookGridPreview';
import './BookResultGrid.scss';
import { store } from '../../store/index.js';
import { useState } from 'react';
import BookFullPreview from '../BookFullPreview/BookFullPreview';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';

function BookResultGrid() {
  const [isBookOverview, setBookOverview] = useState(false);
  const [books, setBooks] = useState([]);
  const [isData, setData] = useState(false);

  function handleBack(){
    setBookOverview(false);
  }
  store.subscribe(() => {
    setBooks(store.getState().book.books);
    if (books != undefined) {
      setData(true);
    }
  })

  return (
    <div className="BookResultGrid">
      {(isData && !isBookOverview) ? <h3 className='BookResultGrid_label'>Found {books.length} books</h3> :
        (isBookOverview) ? <Button onClick={handleBack} className='BookResultGrid_button' variant="outlined" startIcon={<ReplyIcon />}>
          Back
        </Button> :
          <h3 className='BookResultGrid_label'>There is nothing found</h3>}
      {(!isBookOverview) ? <div className='BookResultGrid_container'>
        {
          (isData) ? books.map(book => <BookGridPreview key={book.id} book={book} setBookOverview={setBookOverview} />) : <p></p>
        }
      </div> : <BookFullPreview book={books[isBookOverview||0]} />}
    </div>
  );
}


export default BookResultGrid;

