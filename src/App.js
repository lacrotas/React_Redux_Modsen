import './App.scss';
import SearchSection from './Components/SeacrchSection/SearchSection.js';
import BookResultGrid from './Components/BookResultGrid/BookResultGrid.js';
import { Provider } from 'react-redux';
import {store} from './Store/index.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchSection />
        <BookResultGrid />
      </div>
      </Provider>
  );
}

export default App;
