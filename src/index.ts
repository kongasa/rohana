import { app, BrowserWindow, Menu, ipcMain as ipc, dialog } from 'electron';
import path from 'path';

const createWindow = () => {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, '/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile(path.join(__dirname, './html/index.html'));
  win.webContents.openDevTools();
  ipc.on('open-file-dialog', function (event) {
    dialog
      .showOpenDialog(win, { properties: ['openDirectory'] })
      .then(value => {
        if (value) event.sender.send('selected-directory', value);
      });
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
