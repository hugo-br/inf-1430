import { object, string } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    description: string()
      .required("description is required")
      .min(40, "description is too short - should be 40 chars minimum."),
  }),
};

const params = {
  params: object({
    categoryId: string().required("categoryId is required"),
  }),
};

// Construct Objects
export const createCategorySchema = object({
  ...payload,
});

export const updateCategorySchema = object({
  ...params,
  ...payload,
});

export const oneUpdateCategorySchema = object({
  ...params,
});

export const deleteCategorySchema = object({
  ...params,
});
