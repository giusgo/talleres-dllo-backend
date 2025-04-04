import { UserType, UsersData } from "./user.model";

function existsUserAction(code: string): boolean {
  const exists: boolean = UsersData.some(
    (user: UserType) => user.codigo === code
  );

  return exists;
}

export default existsUserAction;
