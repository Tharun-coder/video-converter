const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const os = require("os");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-file-dialog", (event) => {
  if (os.platform() === "win32" || os.platform() === "linux") {
    dialog
      .showOpenDialog(null, {
        properties: ["openDirectory"],
      })
      .then((res) => {
        console.log(res.filePaths[0] + "main");
        event.sender.send("selected-folder", res.filePaths[0]);
      })
      .catch((err) => console.log(err));
  }
});
