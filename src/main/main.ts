/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { resolveHtmlPath } from './util';
import { exec } from 'child_process';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('ipc-close', async () => {
  mainWindow?.close()
  app.quit()
  pythonServerProcess.kill();
  pythonDependenciesProcess.kill()
  exec('taskkill /F /IM python.exe')
});

ipcMain.on('ipc-minimize', async () => {
  mainWindow?.minimize()
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const pythonServerScript = app.isPackaged
  ? path.join(process.resourcesPath, 'Model/index.py')
  : path.join(__dirname, '../../Model/index.py')

const pythonDependenciesScript = app.isPackaged
  ? path.join(process.resourcesPath, 'Model/install.py')
  : path.join(__dirname, '../../Model/index.py')


const pythonDependenciesProcess = exec(`python ${pythonDependenciesScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("Dependencies installed succesfully")
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

const pythonServerProcess = exec(`python ${pythonServerScript}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    frame: false,
    show: true,
    resizable: true,
    width: 450,
    height: 480,
    maxHeight: 480,
    maxWidth: 450,
    minHeight: 480,
    minWidth: 450,
    alwaysOnTop: true,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.focus()
  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.focus()
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
    pythonServerProcess.kill();
    pythonDependenciesProcess.kill()
  });

  mainWindow.setMenu(null);

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.commandLine.appendSwitch('enable-features', 'WebSpeechAPI');

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    pythonServerProcess.kill();
    pythonDependenciesProcess.kill()
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

  app.setAppUserModelId("BEZIK")

  app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath("exe"),
    args: [
    '--processStart', `"${app.getPath("exe")}"`,
  ]
  })