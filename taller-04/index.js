// Imports
const data = require("./24-taller-04-datos.json");
const express = require("express");
const bodyParser = require('body-parser');


const app = express();

const port = 3000;

app.use(bodyParser.json());


app.get("/users/hobby/:hobby", (request, response) => {
    const { hobby } = request.params;

    const error_details = [];

    if (!hobby) {
        error_details.push("Se requiere un hobby.");
    }

    if (error_details.length > 0) {
        return response.status(400).json({ details: error_details });
    }

    const users = data.filter((user) => user.hobbies.includes(hobby));

    return response.json({ usuarios: users });
});


app.get("/users/exists/:code", (request, response) => {
    const { code } = request.params;

    const error_details = [];

    if (!code) {
        error_details.push("Se requiere un codigo.");
    }

    if (error_details.length > 0) {
        return response.status(400).json({ details: error_details });
    }

    const user = data.find((user) => user.codigo === code);

    if (user) {
        return response.json({ existe: true });
    }

    return response.status(404).json({ existe: false });
});


app.get("/users/hobby/:hobby/count", (request, response) => {
    const { hobby } = request.params;

    const error_details = [];

    if (!hobby) {
        error_details.push("Se requiere un hobby.");
    }

    if (error_details.length > 0) {
        return response.status(400).json({ details: error_details });
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

    const error_details = [];

    if (!hobby) {
        error_details.push("Se requiere un hobby.");
    }

    if (!codigo) {
        error_details.push("Se requiere un codigo.");
    }

    if (error_details.length > 0) {
        return response.status(400).json({ details: error_details });
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

    const error_details = [];

    if (!codigo) {
        error_details.push("Se requiere un código.");
    }
    
    if (!nombre) {
        error_details.push("Se requiere un nombre.");
    }
    
    if (!apellido) {
        error_details.push("Se requiere un apellido.");
    }
    
    if (!hobbies) {
        error_details.push("Se requieren hobbies.");
    } else if (hobbies.length < 2) {
        error_details.push("Se requiere al menos 2 hobbies.");
    }

    if (error_details.length > 0) {
        return response.status(400).json({ details: error_details });
    }

    const user = data.find((user) => user.codigo === codigo);

    if (user) {
        return response.status(400).json({ error: "Ya existe un usuario con ese codigo." });
    }

    data.push({ codigo, nombre, apellido, hobbies });

    return response.status(201).send();
});


app.listen(port, () => {
    console.log("Servidor escuchando en el puerto:", port);
});