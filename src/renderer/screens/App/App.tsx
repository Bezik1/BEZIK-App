import { Line } from "../../icons/Line";
import "./style.css";
import { Navbar } from "../../components/Navbar";
import { ServerInfo } from "../../components/ServerInfo";
import { CommandPrompt } from "../../components/CommandPrompt";
import { ResponseInfo } from "../../components/ResponseInfo";
import { CommandHistory } from "../../components/CommandHistory";
import { Loading } from "../../components/Loading";

export const App = (): JSX.Element => {



  return (
    <div className="app">
      <div className="div-2">
        <div className="operation">
          <div className="overlap">
            <div className="operations">
              <Line className="line-instance" />
            </div>
            <CommandPrompt />
            <ServerInfo />
            <ResponseInfo />
            <CommandHistory />
          </div>
        </div>
        <Navbar />
        <div className="glow-container">
          <div className="glow-effect" />
        </div>
        <Loading />
      </div>
    </div>
  );
};
