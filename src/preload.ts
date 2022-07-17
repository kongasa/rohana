/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.send('open-file-dialog'),
  getSelectedFiles: (
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => ipcRenderer.on('selected-directory', callback),
  readDirs:(dirPath: string) => ipcRenderer.send('read-dirs',dirPath),
  getDirs:(
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => ipcRenderer.on('get-dirs', callback),
});
contextBridge.exposeInMainWorld('logger', {
  log: (...msg: any[]) => console.log(...msg),
  error: (...msg: any[]) => console.error(...msg),
  warn: (...msg: any[]) => console.warn(...msg),
});
