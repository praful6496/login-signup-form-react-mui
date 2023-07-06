import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import GetAllData from './components/GetAllData';
import ErrorPage from './components/404';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user'>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='get-all-user' element={<GetAllData />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
