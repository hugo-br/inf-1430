import { Module, Mutation, VuexModule } from "vuex-class-modules";

@Module
export class UserStore extends VuexModule {
  public showLogin = false;

  @Mutation
  public togglePopUp(): void {
    this.showLogin = !this.showLogin;
  }

  get showLoginForm(): boolean {
    return this.showLogin;
  }
}
