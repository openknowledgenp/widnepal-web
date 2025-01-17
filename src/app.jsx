import { h } from 'preact'; // Import h for JSX support in Preact
import Router from 'preact-router';
import './styles/globals.css';
import Home from './components/Home';
import Schedule from './components/Schedule';

export function App() {
  return (
    <>
      <Router>
        <Home path="/widnepal-web" />
        {/* <Schedule path="/schedule" /> */}
      </Router>
    </>
  );
}
