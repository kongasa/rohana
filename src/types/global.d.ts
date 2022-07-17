/* eslint-disable @typescript-eslint/no-explicit-any */
export {};
declare global {
  interface Window {
    electronAPI: {
      openFileDialog: () => void;
      getSelectedFiles: (
        callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
      ) => Electron.IpcRenderer;
      readDirs:(readDirs:string) => void;
      getDirs:(
        callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
      ) => Electron.IpcRenderer;
    };
    logger:{
      log: (...msg: any[]) => void;
      error: (...msg: any[]) => void;
      warn: (...msg: any[]) => void;
    }
  }
}
