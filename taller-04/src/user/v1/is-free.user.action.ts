import { UserType, UsersData } from "./user.model";

function isFreeUserAction(): UserType[] {
  const users: UserType[] = UsersData.filter(
    (user: UserType) => user.hobbies.length < 3
  );

  return users;
}

export default isFreeUserAction;
