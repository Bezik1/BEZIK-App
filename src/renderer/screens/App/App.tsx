import { Line } from "../../icons/Line";
import { Navbar } from "../../components/Navbar";
import { ServerInfo } from "../../components/ServerInfo";
import { CommandPrompt } from "../../components/CommandPrompt";
import { ResponseInfo } from "../../components/ResponseInfo";
import { CommandHistory } from "../../components/CommandHistory";
import { Loading } from "../../components/Loading";
import Chat from "../../components/Chat";
import Packages from "../../components/Packages";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Notification } from "../../components/Notification";
import "./style.css";
import { useThemeContext } from "../../contexts/ThemeContext";

export const App = (): JSX.Element => {
  const { theme } = useThemeContext()

  console.log(theme)

  return (
    <Router>
      <div className={`app ${theme === "light" ? "light" : "dark"}`}>
        <div className={`div-2 ${theme === "light" ? "light-background" : "dark-background"}`}>
          <div className="operation">
            <div className="overlap">
              <div className={`operations ${theme === "light" ? "light-container" : "dark-container"}`}>
                <Line className="line-instance" />
              </div>
              {/* <Notification /> */}
              <CommandPrompt />
                <Routes>
                  <Route path="/" element={(
                    <>
                      <ServerInfo />
                      <ResponseInfo />
                      <CommandHistory />
                    </>
                  )} />
                  <Route path="/informations" element={<Chat />} />
                  <Route path="/packages" element={<Packages />} />
                </Routes>
            </div>
          </div>
          <Navbar />
          <div className="glow-container">
            <div className="glow-effect" />
          </div>
          <Loading />
        </div>
      </div>
    </Router>
  );
};
