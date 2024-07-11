import { Line } from "../../icons/Line";
import "./style.css";
import { Navbar } from "../../components/Navbar";
import { ServerInfo } from "../../components/ServerInfo";
import { CommandPrompt } from "../../components/CommandPrompt";
import { ResponseInfo } from "../../components/ResponseInfo";
import { CommandHistory } from "../../components/CommandHistory";
import { Loading } from "../../components/Loading";
import { useChat } from "../../contexts/ChatContext";
import Chat from "../../components/Chat";
import { useState } from "react";
import { useCommandContext } from "../../contexts/CommandContext";
import { motion } from "framer-motion";
import { HistoryInfoCommand } from "../../icons/HistoryInfoCommand";

export const App = (): JSX.Element => {
  const [prevInfo, setPrevInfo] = useState("")
  const { information } = useCommandContext()
  const { active } = useChat()


  return (
    <div className="app">
      <div className="div-2">
        <div className="operation">
          <div className="overlap">
            <div className="operations">
              <Line className="line-instance" />
            </div>
            {/* <motion.div
              className="notification"
              initial={{left: "-85%" }}
              // animate={{opacity: 1, y: 0 }}
              animate={{ x: (prevInfo !== information && information !== "") ? "12%" : "-85%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="notification-info">Notification</div>
              <HistoryInfoCommand className="notification-icon" />
            </motion.div> */}
            <CommandPrompt />
            {active ? <Chat /> :
            <>
              <ServerInfo />
              <ResponseInfo />
              <CommandHistory />
            </>}
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
