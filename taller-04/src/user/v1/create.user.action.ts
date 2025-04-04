import { UserType, UsersData } from "./user.model";

function createUserAction(
  code: string,
  name: string,
  last_name: string,
  hobbies: string[]
): void {
  if (hobbies.length < 2) {
    throw new Error("At least 2 hobbies are required.");
  }

  const user = UsersData.find((user) => user.codigo === code);

  if (user) {
    throw new Error("A user with that code already exists.");
  }

  UsersData.push({ codigo: code, nombre: name, apellido: last_name, hobbies });
}

export default createUserAction;
