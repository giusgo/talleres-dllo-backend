import { Router, Request, Response } from "express";
import {
  filterByHobby,
  exists,
  countHobby,
  isFree,
  suggest,
  create,
} from "./user.controller";
import { UserType } from "./user.model";
import { error } from "console";

const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
function GetByHobby(request: Request, response: Response) {
  const { hobby } = request.params;

  const users: UserType[] = filterByHobby(hobby);

  return response.status(200).json({ message: "Success", users: users });
}

function UserExists(request: Request, response: Response) {
  const { code } = request.params;

  const user_exists: boolean = exists(code);

  return response.status(200).json({ message: "Success", exists: user_exists });
}

function CountByHobby(request: Request, response: Response) {
  const { hobby } = request.params;

  const quantity: number = countHobby(hobby);

  return response.status(200).json({ message: "Success", quantity: quantity });
}

function GetFreeUsers(request: Request, response: Response) {
  const users: UserType[] = isFree();

  return response.status(200).json({ message: "Success", free: users });
}

function SuggestHobby(request: Request, response: Response) {
  const { hobby, code } = request.body;

  const error_details = [];

  if (!hobby) {
    error_details.push("A hobbie is required.");
  }

  if (!code) {
    error_details.push("A code is required.");
  }

  if (error_details.length > 0) {
    return response.status(400).json({ details: error_details });
  }

  try {
    suggest(hobby, code);
  } catch (error: any) {
    return response.status(400).json({ message: error.message });
  }

  return response.status(200).json({ message: "Success" });
}

function CreateUser(request: Request, response: Response) {
  const { code, name, last_name, hobbies } = request.body;

  const error_details = [];

  if (!code) {
    error_details.push("A code is required.");
  }

  if (!name) {
    error_details.push("A name is required.");
  }

  if (!last_name) {
    error_details.push("A last name is required.");
  }

  if (!hobbies) {
    error_details.push("Hobbies are required.");
  }

  if (error_details.length > 0) {
    return response.status(400).json({ details: error_details });
  }

  try {
    create(code, name, last_name, hobbies);
  } catch (error: any) {
    return response.status(400).json({ message: error.message });
  }

  return response.status(200).json({ message: "Success" });
}

// DECLARE ENDPOINTS
userRoutes.get("/hobby/:hobby", GetByHobby);
userRoutes.get("/exists/:code", UserExists);
userRoutes.get("/hobby/:hobby/count", CountByHobby);
userRoutes.get("/is-free", GetFreeUsers);
userRoutes.post("/suggest", SuggestHobby);
userRoutes.post("/", CreateUser);

// EXPORT ROUTES
export default userRoutes;
