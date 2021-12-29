import { object, string, number } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    description: string()
      .required("description is required")
      .min(10, "description is too short - should be 120 chars minimum."),
    quantity: number(),
    price: number(),
    image: string(),
  }),
};

const params = {
  params: object({
    productId: string().required("productId is required"),
  }),
};

// ROUTES
export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...params,
  ...payload,
});

export const oneUpdateProductSchema = object({
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});
