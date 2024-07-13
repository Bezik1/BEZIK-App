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

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <div className="div-2">
          <div className="operation">
            <div className="overlap">
              <div className="operations">
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
