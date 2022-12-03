import { Routes, Route, Navigate } from 'react-router-dom';
//componets
import Navbar from './components/Navbar';
import ProtectorRoute from './components/ProtectorRoute';
//views
import Dashboard from './views/Dashboard';
import MainPage from './views/MainPage';
import List from './views/List';
import SubRutas from './views/SubRutas';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/rutas' element={<SubRutas/>}>
          <Route index element={<h1> main rutas</h1>}/>
          <Route path='hi' element={<h1> hi rutas</h1>}/>
        </Route>
        <Route path='/list/:id' element={<List />} />
        <Route path='/dashboard/*' element={
          <ProtectorRoute>
            <Dashboard />
          </ProtectorRoute>
        } />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
