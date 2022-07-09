import { contextBridge,ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog:() => ipcRenderer.send('open-file-dialog'),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSelectedFiles:(callback:((event: Electron.IpcRendererEvent, ...args: any[]) => void)) => ipcRenderer.on('selected-directory', callback)
})