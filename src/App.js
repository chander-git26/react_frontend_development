import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <div className='h-screen flex flex-col'>
    <h1>Hello</h1>
     <Header/>
     
         <Outlet></Outlet>
     
     <Footer/>
   </div>
   </>
    
  );

}

export default App;
