import './BookGridPreview.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookGridPreview({ book }) {

  return (
    <div className="BookGridPreview" >
      <Link className='link' to={'/bookPrevie/' + book.id}>
        <img className="BookGridPreview_image" src={book.imageSrc} alt={'No book image'} />
        <div className='BookGridPreview_container'>
          <p className='Container_paragraph--kategory p'>{book.category}</p>
          <h3 className='Container_paragraph--name'>{book.name}</h3>
          <p className='Container_paragraph--author p'>{book.author}</p>
        </div>
      </Link>
    </div>
  );
}
BookGridPreview.propTypes = {
  book: PropTypes.object.isRequired
};
export default BookGridPreview;

