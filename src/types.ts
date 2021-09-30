export type AvatarType =
  | "administrator"
  | "hacker"
  | "woman"
  | "man"
  | "kitty"
  | "cat"
  | "rainbowFlag"
  | "lgbtIcon"
  | "dinosaur";

export type User = {
  userID: string;
  avatar: AvatarType;
  username: string;
  score: number;
  connected: boolean;
  vote?: "true" | "false";
};
export type ScoringUsers = Pick<User, "username" | "avatar" | "score">;
export type Choice<T = any> = {
  label: string;
  value: any;
  icon?: T;
};
