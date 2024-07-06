import { useCommandContext } from "../../contexts/CommandContext";
import { motion } from "framer-motion";

import LOGO_PATH from "../../assets/img/logo.svg"

export const Loading = () => {
    const { loading } = useCommandContext();

    return (
        <motion.div
            className="glow-container glow-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 1 : 0, zIndex: loading ? 10 : -1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.25 }}
        >
            <div className="glow-container glow-modal-container">
                <div className="glow-effect" />
            </div>
            <img className="icon-modal" alt="Logo" src={LOGO_PATH} />
        </motion.div>
    );
};
