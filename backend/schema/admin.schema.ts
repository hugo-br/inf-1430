import { object, string, ref } from "yup";

/**
 * @desc    Verify if the admin params sent are valid
 * @error   Return error codes
 **/
export const createAdminSchema = object({
  body: object({
    firstName: string().required("firstName_required"),
    lastName: string().required("lastName_required"),
    password: string()
      .required("password_required")
      .min(6, "password_too_short")
      .matches(/^[a-zA-Z0-9_.-]*$/, "password_latin"),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "password_must_match"
    ),
    email: string().email("email_not_valid").required("email_required"),
  }),
});

/**
 * @params  Admin object
 * @desc    Send request to create a new administrator
 **/
export const createAdminSessionSchema = object({
  body: object({
    password: string()
      .required("password_required")
      .min(6, "password_too_short")
      .matches(/^[a-zA-Z0-9_.-]*$/, "password_latin"),

    email: string().email("email_not_valid").required("email_required"),
  }),
});
