const express = require("express")
const fs = require("fs")
const path = require("path") 
const app = express()
const PORT = 3000



app.use(express.json())
const ruta = path.join(__dirname)
const rutaProducto = path.join(__dirname,"productos.json")
const rutaUsuario = path.join(__dirname,"usuarios.json")
const productos = JSON.parse(fs.readFileSync(rutaProducto, "utf-8"))
const usuarios = JSON.parse(fs.readFileSync(rutaUsuario, "utf-8"))




//Tarea 1 Módulo de Usuarios

//trae los usuarios
app.get("/api/usuarios", (req, res) => {
    res.json(usuarios)
})


//crea un nuevo usuario
app.post("/api/usuarios", (req, res) => {


    const { nombre, email, contrasena } = req.body

    if(!nombre || !email || !contrasena){
        return res.status(400).json({
            error: "Faltan datos. el body debe tener nombre, email y contrasena"
        })
    }


    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        email,
        contrasena
    }

    usuarios.push(nuevoUsuario)
    fs.writeFileSync(rutaUsuario, JSON.stringify(usuarios))
    
    res.status(201).json(nuevoUsuario)
})

//trae un usuario por id
app.get("/api/usuarios/:id", (req, res) => {

     const id = Number(req.params.id)

     const usuario = usuarios.find(u => u.id === id)

     if(!usuario){

        return res.status(404).json({error: "usuario no encontrado"})
     }

    res.json(usuario)
})



//Tarea 2  Módulo de Productos
//Retorna todos los productos
app.get("/api/productos", (req, res) => {
    res.json(productos)
})

//Crea un nuevo producto
app.post("/api/productos", (req, res) => {


    const { nombre, categoria, precio, stock } = req.body

    if(!nombre || !categoria || !precio){
        return res.status(400).json({
            error: "Faltan datos. el body debe tener nombre, categoria, precio"
        })
    }


    const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        categoria,
        precio,
        stock: stock ? stock : 0
    }

    productos.push(nuevoProducto)
    fs.writeFileSync(rutaProducto, JSON.stringify(productos))
    
    res.status(201).json(nuevoProducto)
})

//Retorna un producto por id
app.get("/api/productos/:id", (req, res) => {

     const id = Number(req.params.id)

     const producto = productos.find(p => p.id === id)

     if(!producto){

        return res.status(404).json({error: "producto no encontrado"})
     }

    res.json(producto)
})

//Modifica un producto existente por su ID
app.put("/api/productos/:id", (req, res) => {

    const id = Number(req.params.id)

    const producto = productos.find(p => p.id === id)

    if(!producto){
        return res.status(404).json({error: "producto no encontrado"})
    }

    //Actualiza solo los campos que vienen en el body
    if(req.body.nombre) producto.nombre = req.body.nombre
    if(req.body.categoria) producto.categoria = req.body.categoria
    if(req.body.precio) producto.precio = req.body.precio
    if(req.body.stock !== undefined) producto.stock = req.body.stock

    fs.writeFileSync(rutaProducto, JSON.stringify(productos))

    res.json(producto)
})


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api/usuarios y http://localhost:${PORT}/api/productos`)

})