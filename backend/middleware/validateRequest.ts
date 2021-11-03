import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger";

/**
 *   @desc:   Valider une requete avant de l'envoyer a la base de donnee
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
    return res.status(200).send(e.errors);
  }
};

export default validate;
