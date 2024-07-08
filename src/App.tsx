import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './styles/GlobalStyles';
import NormalizeStyles from './styles/NormalizeStyles';

function App() {
  return (
    <div className="App">
      <NormalizeStyles />
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
