import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/Home' element = {<Home/>}/>
          <Route path = '/detail/:id' element = {<Details/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
