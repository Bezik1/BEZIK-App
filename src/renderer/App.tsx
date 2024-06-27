import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import UI from './components/UI';
import './App.css';
import { CommandProvider } from './contexts/CommandContext';
import Background from './components/Background';
import AppBar from './components/AppBar';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
      <ThemeProvider>
        <CommandProvider>
          <AppBar />
          <Background />
          <Router>
            <Routes>
              <Route path="/" element={<UI />} />
            </Routes>
          </Router>
        </CommandProvider>
      </ThemeProvider>
  );
}
