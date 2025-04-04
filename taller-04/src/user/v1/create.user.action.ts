import { UserType, UsersData } from "./user.model";

function createUserAction(
  code: string,
  name: string,
  last_name: string,
  hobbies: string[]
): void {
  if (hobbies.length < 2) {
    throw new Error("Se requiere al menos 2 hobbies.");
  }

  const user = UsersData.find((user) => user.codigo === code);

  if (user) {
    throw new Error("Ya existe un usuario con ese codigo.");
  }

  UsersData.push({ codigo: code, nombre: name, apellido: last_name, hobbies });
}

export default createUserAction;
