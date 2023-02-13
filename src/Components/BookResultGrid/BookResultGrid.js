import BookGridPreview from '../BookGridPreview/BookGridPreview';
import './BookResultGrid.scss';

function BookResultGrid() {
  return (
    <div className="BookResultGrid">
     <h3 className='BookResultGrid_label'>Found 544 books</h3>
     <div className='BookResultGrid_container'>
        <BookGridPreview kategory="Classic" name="Nanana" author="David" />
        <BookGridPreview kategory="Art" name="Test" author="Alex" />
        <BookGridPreview kategory="Drama" name="Tesfff" author="Vladimir" />
        <BookGridPreview kategory="Classic" name="Nanana" author="David" />
     </div>
    </div>
  );
}

export default BookResultGrid;

