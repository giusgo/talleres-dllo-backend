import { UserType, UsersData } from "./user.model";

function suggestUserAction(hobby: string, code: string): void {
  const user = UsersData.find((user: UserType) => user.codigo === code);

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  if (user.hobbies.length >= 3) {
    throw new Error("El usuario ya tiene muchos hobbies.");
  }

  if (user.hobbies.includes(hobby)) {
    throw new Error("El usuario ya tiene realiza esa actividad.");
  }

  user.hobbies.push(hobby);
}

export default suggestUserAction;
