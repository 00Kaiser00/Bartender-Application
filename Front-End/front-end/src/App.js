import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import NewOrder from './components/newOrder';
import OrderQue from './components/orderQue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar/" element={<Menu />} />
        <Route path="/bar/order/" element={<NewOrder />} />
        <Route path="/bar/queue/" element={<OrderQue />} />
      </Routes>
    </Router>
  );
}

export default App;
