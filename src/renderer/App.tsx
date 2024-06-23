import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import UI from './components/UI';
import './App.css';
import { CommandProvider } from './contexts/CommandContext';
import Background from './components/Background';
import AppBar from './components/AppBar';
import { ThemeProvider } from './contexts/ThemeContext';
import SignUp from './components/SignUp';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <CommandProvider>
          <AppBar />
          <Background />
          <Router>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/ui" element={<UI />} />
            </Routes>
          </Router>
        </CommandProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
