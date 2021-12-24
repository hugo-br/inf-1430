import { Module, VuexModule, Mutation } from "vuex-module-decorators";

/**
 * @desc   Create a store that contains user informations after user has logged in
 **/

@Module({ name: "user" })
export default class UserStore extends VuexModule {
  _id: string = "";
  _firstName: string = "";
  _lastName: string = "";
  _role: string = "user";
  _email: string = "";

  @Mutation
  public setUser(payload: any): void {
    console.log("payload", payload);
    this._firstName = payload.firstName || "";
    this._lastName = payload.lastName || "";
    this._role = payload.role || "user";
    this._email = payload.email || "";
    this._id = payload._id || "";
  }

  @Mutation
  public clearUser(): void {
    this._firstName = "";
    this._lastName = "";
    this._role = "";
    this._email = "";
    this._id = "";
  }

  get name(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
