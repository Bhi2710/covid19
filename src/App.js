import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import News from './components/News';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
