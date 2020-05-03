const { app, BrowserWindow } = require('electron')

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
}

app.whenReady().then(createWindow)