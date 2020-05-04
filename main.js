const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const Store = require('electron-store')

const store = new Store();
store.set('todos', []);

global.win;

function createWindow() {
    // Créer la fenetre du navigateur
    global.win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    let winNoBorder = new BrowserWindow({ backgroundColor: '#0000dd', frame: false, maxWidth: 100, maxHeight:  100})
    let winBlue = new BrowserWindow({ backgroundColor: '#000055', width: 500, height:  500})

    winNoBorder.show()

    // Charger le fichier index.html à afficher dans la fenêtre
    win.loadFile('index.html')
    win.webContents.openDevTools()

    // // Créer la fenetre du navigateur
    // let winGoogle = new BrowserWindow({
    //     width: 400,
    //     height: 400
    // })

    winGoogle.loadURL('https://google.com')
}

app.whenReady().then(createWindow)

app.on('quit', () => {
    console.log("L'application a été quittée !")
})

app.on('browser-window-blur', () => {
    console.log("L'application est en arrière plan")
    //store.set('element', 'blured!');
    //console.log( store.get('element') )
})

app.on('browser-window-focus', () => {
    console.log("L'application est en premier plan")
})

ipcMain.on('open-error-dialog', () => {
    dialog.showErrorBox('Message d\'erreur', "Vous avez lancé une alerte !")
})

ipcMain.on('btn-transparent', () => {
    global.win.setOpacity(0.4)
})

ipcMain.on('todoCreated', (event, args) => {
    let currentTodos = store.get('todos')

    store.set('todos', [...currentTodos, args.todo])

    console.log( store.get('todos') )
})
