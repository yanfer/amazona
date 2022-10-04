import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { NoMatch } from './components/noMatch';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
