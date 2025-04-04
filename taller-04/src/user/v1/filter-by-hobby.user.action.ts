import { UserType, UsersData } from "./user.model";

function filterByHobbyUserAction(hobby: string): UserType[] {
  const users: UserType[] = UsersData.filter((user: UserType) =>
    user.hobbies.includes(hobby)
  );

  return users;
}

export default filterByHobbyUserAction;
