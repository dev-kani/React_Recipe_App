import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Categories from './components/Categories'
import Pages from './pages/Pages'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
