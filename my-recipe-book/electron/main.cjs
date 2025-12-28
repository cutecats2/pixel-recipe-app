const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 650,
    backgroundColor: "#F6C1D1", // pastel pink
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // optional for future features
      nodeIntegration: true,
      contextIsolation: false, // needed for simple apps
    },
  });

  // Load your Vite dev server
  win.loadURL("http://localhost:5173");

  // Optional: open dev tools for now
  // win.webContents.openDevTools();
}

// When Electron is ready, create the window
app.whenReady().then(createWindow);

// Quit when all windows are closed (except macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// On macOS, re-create window if dock icon is clicked
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
