import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import { getCardsThunk } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardsThunk());
  },[dispatch]);
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
