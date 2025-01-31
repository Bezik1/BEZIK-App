import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import { App } from './screens/App';
import "./index.css"
import { ThemeProvider } from './contexts/ThemeContext';
import { CommandProvider } from './contexts/CommandContext';
import { CommandHistoryProvider } from './contexts/CommandHistoryContext';
import { ChatProvider } from './contexts/ChatContext';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <CommandHistoryProvider>
        <ThemeProvider>
            <ChatProvider>
                <CommandProvider>
                    <App />
                </CommandProvider>
            </ChatProvider>
        </ThemeProvider>
    </CommandHistoryProvider>
);

window.electron.ipcRenderer.once('ipc-example', (arg) => {
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
