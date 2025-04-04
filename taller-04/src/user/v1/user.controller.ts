import filterByHobbyUserAction from "./filter-by-hobby.user.action";
import existsUserAction from "./exists.user.action";
import countHobbyUserAction from "./count-hobby.user.action";
import isFreeUserAction from "./is-free.user.action";
import suggestUserAction from "./suggest.user.action";
import createUserAction from "./create.user.action";
import { UserType } from "./user.model";

// CONTROLLER FUNCTIONS
function filterByHobby(hobby: string): UserType[] {
  const users: UserType[] = filterByHobbyUserAction(hobby);

  return users;
}

function exists(code: string): boolean {
  const exists: boolean = existsUserAction(code);

  return exists;
}

function countHobby(hobby: string): number {
  const quantity = countHobbyUserAction(hobby);

  return quantity;
}

function isFree(): UserType[] {
  const users: UserType[] = isFreeUserAction();

  return users;
}

function suggest(hobby: string, code: string): void {
  suggestUserAction(hobby, code);
}

function create(
  code: string,
  name: string,
  last_name: string,
  hobbies: string[]
): void {
  createUserAction(code, name, last_name, hobbies);
}

// EXPORT
export { filterByHobby, exists, countHobby, isFree, suggest, create };
