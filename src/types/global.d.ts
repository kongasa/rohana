export {};
declare global {
  interface Window {
    electronAPI: {
      openFileDialog: () => void;
      getSelectedFiles: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
      ) => Electron.IpcRenderer;
    };
  }
}
