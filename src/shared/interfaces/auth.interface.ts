export interface IAuth {
  _id?: string;
  email: string;
  passwordHash: string;
  creationDate?: Date;
}
