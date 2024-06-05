import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import UI from './components/UI';
import './App.css';
import { CommandProvider } from './contexts/CommandContext';
import Background from './components/Background';

export default function App() {
  return (
    <CommandProvider>
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<UI />} />
        </Routes>
      </Router>
    </CommandProvider>
  );
}
