const { app, BrowserWindow, ipcMain, dialog } = require('electron')

function createWindow() {
    // Créer la fenetre du navigateur
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Charger le fichier index.html à afficher dans la fenêtre
    //win.loadFile('index.html')
    win.loadFile('index.html')

    // Créer la fenetre du navigateur
    let winGoogle = new BrowserWindow({
        width: 400,
        height: 400
    })

    // Charger le fichier index.html à afficher dans la fenêtre
    //win.loadFile('index.html')
    win.loadFile('index.html')
    win.webContents.openDevTools()

    winGoogle.loadURL('https://google.com')
    winGoogle.setOpacity(0.4)
}

app.whenReady().then(createWindow)

app.on('quit', () => {
    console.log("L'application a été quittée !")
})

app.on('browser-window-blur', () => {
    console.log("L'application est en arrière plan")
})

app.on('browser-window-focus', () => {
    console.log("L'application est en premier plan")
})

ipcMain.on('open-error-dialog', () => {
    dialog.showErrorBox('Message d\'erreur', 'Vous avez lancé une alerte !')
})