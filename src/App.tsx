import React from 'react';

import Layout from './components/layouts/Layout';
import NormalizeStyles from './styles/NormalizeStyles';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <NormalizeStyles />
      <GlobalStyle />
      <Layout>Hello world</Layout>
    </div>
  );
}

export default App;
