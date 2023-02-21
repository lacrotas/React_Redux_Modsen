import './BookGridPreview.scss';
// import book from '../../Assets/images/book.png';
function BookGridPreview(props) {
  return (
    <div className="BookGridPreview">
      <img className="BookGridPreview_image" src={props.imageSrc} />
      <div className='BookGridPreview_container'>
        <p className='Container_paragraph--kategory p'>{props.category}</p>
        <h3 className='Container_paragraph--name'>{props.name}</h3>
        <p className='Container_paragraph--author p'>{props.author}</p>
      </div>
    </div>
  );
}

export default BookGridPreview;

