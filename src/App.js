import GlobalStyle from './globalStyles';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} exact /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
