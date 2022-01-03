import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Product } from "../services/ProductsService";

/**
 * @desc   Store for the shopping cart
 **/

export interface cartProduct {
  productId: string;
  name: string;
  images: string;
  quantity: number;
  price: number;
}

@Module({ name: "cart" })
export default class CartStore extends VuexModule {
  _cart: Array<cartProduct> = [];

  @Mutation
  public addToCart(payload: cartProduct): void {
    const foundIndx = this._cart.findIndex(
      (prod) => prod.productId === payload.productId
    );

    if (foundIndx !== -1) {
      const quantity =
        Number(this._cart[foundIndx].quantity) + Number(payload.quantity);
      this._cart[foundIndx].quantity = quantity;
      return;
    }

    this._cart.push(payload);
    return;
  }

  @Mutation
  public pushProductToCart(payload: cartProduct): void {
    this._cart.push(payload);
  }

  @Mutation
  public updateQuantity(foundIndx: number, quantity: number): void {
    this._cart[foundIndx].quantity = quantity;
  }

  @Action
  public removeFromCart(obj: Partial<Product>): void {
    const foundIndx = this._cart.findIndex(
      (prod) => prod.productId === obj.productId
    );
    if (foundIndx > -1) {
      this._cart.splice(foundIndx, 1);
    }
    return;
  }

  /* Return the entire Cart */
  get cartItems(): Array<Partial<Product>> {
    return this._cart;
  }

  get numberCartItems(): number {
    return Number(this._cart.length);
  }
}
