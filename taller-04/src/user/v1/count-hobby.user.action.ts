import { UserType, UsersData } from "./user.model";

function countHobbyUserAction(hobby: string): number {
  const quantity: number = UsersData.filter((user: UserType) =>
    user.hobbies.includes(hobby)
  ).length;

  return quantity;
}

export default countHobbyUserAction;
