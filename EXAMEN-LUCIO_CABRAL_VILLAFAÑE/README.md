# PARCIAL

---

> Bienvenid@! estuvimos esperando que llegues, tenemos tareas críticas y prioritarias en nuestro backlog. Prestá mucha atención a las instrucciones.
>
> Tu misión es construir desde cero una **API REST** en Node.js + Express que gestione usuarios y productos. Seguí las instrucciones al pie de la letra y priorizá en el orden indicado.

---

## Pasos previos

1. Creá una carpeta para el proyecto e inicializá con `npm init -y`
2. Instalá Express: `npm install express`
3. Creá un archivo `index.js` que levante el servidor en el puerto `3000`
4. Verificá que el servidor responde antes de avanzar con los endpoints
5. Creá los archivos `usuarios.json` y `productos.json` como arrays vacíos `[]` para persistir los datos

---

## TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD

---

### TAREA 1 — Módulo de Usuarios

Implementá los siguientes endpoints para gestionar usuarios.

**Estructura de un usuario:**

```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "contrasena": "1234"
}
```

| Prioridad | Método | Ruta | Descripción |
|-----------|--------|------|-------------|
| 🔴 Alta | GET | `/api/usuarios` | Retorna todos los usuarios |
| 🔴 Alta | POST | `/api/usuarios` | Crea un nuevo usuario |
| 🟡 Media | GET | `/api/usuarios/:id` | Retorna un usuario por su ID |

**Consideraciones:**
- El `id` debe generarse automáticamente (no lo manda el cliente)
- `nombre`, `email` y `contrasena` son obligatorios — si falta alguno, respondé con status `400` y un mensaje de error claro
- Si se busca un usuario por ID que no existe, respondé con status `404`
- Persistí los datos en `usuarios.json` usando el módulo `fs`

---

### TAREA 2 — Módulo de Productos

Implementá los siguientes endpoints para gestionar productos.

**Estructura de un producto:**

```json
{
  "id": 1,
  "nombre": "Laptop Pro",
  "categoria": "Electrónica",
  "precio": 1200,
  "stock": 5
}
```

| Prioridad | Método | Ruta | Descripción |
|-----------|--------|------|-------------|
| 🔴 Alta | GET | `/api/productos` | Retorna todos los productos |
| 🔴 Alta | POST | `/api/productos` | Crea un nuevo producto |
| 🟡 Media | GET | `/api/productos/:id` | Retorna un producto por su ID |
| 🟢 Bonus | PUT | `/api/productos/:id` | Modifica un producto existente por su ID |

**Consideraciones:**
- El `id` debe generarse automáticamente
- `nombre`, `categoria` y `precio` son obligatorios — si falta alguno, respondé con status `400`
- `stock` es opcional, si no se manda debe quedar en `0` por defecto
- Si se busca o modifica un producto por ID que no existe, respondé con status `404`
- Persistí los datos en `productos.json` usando el módulo `fs`
- Para el PUT, solo se deben actualizar los campos que el cliente mande (no pisar campos que no vienen)

---

## Listado de endpoints a completar

> Una vez que terminés, completá esta tabla con el estado de cada endpoint.

| Método | Ruta | Parámetros | Estado |
|--------|------|------------|--------|
| GET | `/api/usuarios` | — | ✅ |
| POST | `/api/usuarios` | body: `nombre`, `email`, `contrasena` | ✅ |
| GET | `/api/usuarios/:id` | param: `id` | ✅ |
| GET | `/api/productos` | — | ✅ |
| POST | `/api/productos` | body: `nombre`, `categoria`, `precio`, `stock` (opcional) | ✅ |
| GET | `/api/productos/:id` | param: `id` | ✅ |
| PUT | `/api/productos/:id` | param: `id`, body: campos a modificar | ✅ |

---

## Instrucciones para la entrega

Si ya terminaste o se acabó el tiempo, asegurate de seguir estos pasos:

1. Completá el listado de endpoints de arriba marcando con ✅ los que implementaste
2. Realizá un commit con el mensaje: `Parcial - [Tu Nombre Completo]`
3. Realizá un push a tu repositorio
4. Realizá un pull request al repositorio del profesor
