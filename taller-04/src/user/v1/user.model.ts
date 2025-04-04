import * as data from "../../../24-taller-04-datos.json";

// DECLARE MODEL TYPE
type UserType = {
  nombre: string;
  apellido: string;
  codigo: string;
  hobbies: string[];
};

const UsersData: UserType[] = data;

export { UserType, UsersData };
