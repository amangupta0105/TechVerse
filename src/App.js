import './App.css';
import Header from  './components/Header';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchData,page} =  useContext(AppContext);
  useEffect(()=>  fetchData(page),[]);
  return (
    <div className="App">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
