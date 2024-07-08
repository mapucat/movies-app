import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './styles/GlobalStyles';
import NormalizeStyles from './styles/NormalizeStyles';
import SavedMoviesPage from './pages/SavedMoviesPage';
import { SavedMoviesProvider } from './context/SavedMoviesContext';

function App() {
  return (
    <div className="App">
      <NormalizeStyles />
      <GlobalStyle />
      <SavedMoviesProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/saved" element={<SavedMoviesPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SavedMoviesProvider>
    </div>
  );
}

export default App;
