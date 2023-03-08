import './BookGridPreview.scss';
import PropTypes from 'prop-types';

function BookGridPreview({ book, setBookOverview }) {
  const handleChange = () => {
      setBookOverview(book.id);
  };
  return (
    <div className="BookGridPreview" onClick={handleChange}>
      <img className="BookGridPreview_image" src={book.imageSrc} alt={'No book image'} />
      <div className='BookGridPreview_container'>
        <p className='Container_paragraph--kategory p'>{book.category}</p>
        <h3 className='Container_paragraph--name'>{book.name}</h3>
        <p className='Container_paragraph--author p'>{book.author}</p>
      </div>
    </div>
  );
}
BookGridPreview.propTypes = {
  setBookOverview: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};
export default BookGridPreview;

