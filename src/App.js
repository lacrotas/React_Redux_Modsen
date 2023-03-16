import MainPage from './pages/MainPage/MainPage.js';
import BookFullPreview from './pages/BookFullPreview/BookFullPreview.js';
import { Routes, Route,Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/index.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path='/bookPrevie/:bookId' element={<BookFullPreview />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
