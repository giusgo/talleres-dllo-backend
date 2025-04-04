import { UserType, UsersData } from "./user.model";

function suggestUserAction(hobby: string, code: string): void {
  const user = UsersData.find((user: UserType) => user.codigo === code);

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.hobbies.length >= 3) {
    throw new Error("User already has many hobbies.");
  }

  if (user.hobbies.includes(hobby)) {
    throw new Error("User already does that activity.");
  }

  user.hobbies.push(hobby);
}

export default suggestUserAction;
