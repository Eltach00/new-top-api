export interface IAuth {
  _id?: string;
  email: string;
  passwordHash: number;
  creationDate?: Date;
}
