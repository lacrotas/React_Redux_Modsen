import './SearchSection.scss';
import SeacrhComboBox from '../SearchComboBox/SeacrchComboBox.js';
import CustomSelect from '../CustomSelect/CustomSelect.js';
function SearchSection() {
  return (
    <div className="SearchSection">
      <h2 className='SearchSection_label'>Search for books</h2>
      <div className='SearchSection_container'>
        <SeacrhComboBox isBookName={1} />
        <div className='container_select'>
          <SeacrhComboBox isBookName={2} />
          <CustomSelect />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

