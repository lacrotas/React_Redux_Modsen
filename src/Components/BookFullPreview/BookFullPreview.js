import './BookFullPreview.scss';
import PropTypes from 'prop-types';

function BookFullPreview({ book }) {

  return (
    <div className="BookFullPreview">
      <div className='BookFullPreview_container--image'>
      <img className="container_image" src={book.imageSrc} alt={'No book image'} />
      </div>
      <div className='BookFullPreview_information'>
        <div className='information_container'>
          <p className='container_paragraph--label'>Kategory: </p>
          <p className='container_paragraph'>{book.category}</p>
        </div>
        <div className='information_container'>
          <h3 className='container_paragraph--label'>Book name: </h3>
          <h3 className='container_paragraph'>{book.name}</h3>
        </div>
        <div className='information_container'>
          <p className='container_paragraph--label'>Author: </p>
          <p className='container_paragraph'>{book.author}</p>
        </div>
        <div className='information_container'>
          <p className='container_paragraph--label'>Description: </p>
          <p className='container_paragraph--description'>{book.description || "None"}</p>
        </div>
      </div>
    </div>
  );
}

BookFullPreview.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookFullPreview;

