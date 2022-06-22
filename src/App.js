import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Home from './pages/Home';
import { getCardsThunk } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardsThunk(1));
  },[dispatch]);
  
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
