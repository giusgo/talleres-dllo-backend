// Imports
const data = require("./24-taller-04-datos.json");
const express = require("express");
const bodyParser = require('body-parser');


const app = express();

const port = 3000;

app.use(bodyParser.json());


app.get("/users/hobby", (request, response) => {
    const { hobby } = request.query;

    if (!hobby) {
        return response.status(400).json({ error: "Se requiere un hobby." });
    }

    const users = data.filter((user) => user.hobbies.includes(hobby));

    return response.json({ usuarios: users });
});


app.get("/users/exists", (request, response) => {
    const { codigo } = request.query;

    if (!codigo) {
        return response.status(400).json({ error: "Se requiere un codigo." });
    }

    const user = data.find((user) => user.codigo === codigo);

    if (user) {
        return response.json({ existe: true });
    }

    return response.status(404).json({ existe: false });
});


app.get("/users/hobby/count", (request, response) => {
    const { hobby } = request.query;

    if (!hobby) {
        return response.status(400).json({ error: "Se requiere un hobby." });
    }

    const users = data.filter((user) => user.hobbies.includes(hobby));

    return response.json({ cantidad: users.length });
});


app.get("/users/is-free", (request, response) => {
    const users = data.filter((user) => user.hobbies.length < 3);

    return response.json({ libres: users });
});


app.post("/users/suggest", (request, response) => {
    const { hobby, codigo } = request.body;

    if (!hobby) {
        return response.status(400).json({ error: "Se requiere un hobby." });
    }

    if (!codigo) {
        return response.status(400).json({ error: "Se requiere un codigo." });
    }

    const user = data.find((user) => user.codigo === codigo);

    if (!user) {
        return response.status(404).json({ error: "Usuario no encontrado." });
    }

    if (user.hobbies >= 3) {
        return response.status(400).json({ error: "El usuario ya tiene muchos hobbies." });
    }

    user.hobbies.push(hobby);

    return response.status(200).send();
});


app.post("/users", (request, response) => {
    const { codigo, nombre, apellido, hobbies } = request.body;

    if (!codigo) {
        return response.status(400).json({ error: "Se requiere un codigo." });
    }

    if (!nombre) {
        return response.status(400).json({ error: "Se requiere un nombre." });
    }

    if (!apellido) {
        return response.status(400).json({ error: "Se requiere un apellido." });
    }

    if (!hobbies) {
        return response.status(400).json({ error: "Se requiere hobbies." });
    }

    if (hobbies.length < 2) {
        return response.status(400).json({ error: "Se requiere al menos 2 hobbies." });
    }

    data.push({ codigo, nombre, apellido, hobbies });

    return response.status(201).send();
});


app.listen(port, () => {
    console.log("Servidor escuchando en el puerto:", port);
});