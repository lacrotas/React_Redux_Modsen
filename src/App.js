import './App.scss';
import SearchSection from './components/SeacrchSection/SearchSection.js';
import BookResultGrid from './components/BookResultGrid/BookResultGrid.js';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

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
