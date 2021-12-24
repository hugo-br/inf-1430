import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger";

/**
 *   @desc:   Valid the schema of a request before doing db operations
 *   @error   Return error object {errorMsg: [""], confirm: false}
 **/

const validate = (schema: AnySchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (e: any) {
    log.error(e);
    return res.status(200).send({ errorMsg: e.errors, confirm: false });
  }
};

export default validate;
