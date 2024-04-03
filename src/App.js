import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import MainRoutes from './RouteControllers/MainRoutes';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
    <CssBaseline />
      <MainRoutes />
    </>
  );
}

export default App;
