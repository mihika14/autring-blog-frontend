import './App.css';

import Favourite from './components/Favourite/Favourite';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/news/News';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/favourite' element={<Favourite />} />
        <Route exact path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
