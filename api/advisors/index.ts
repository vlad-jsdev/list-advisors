import express from "express";
import getlistAll from "./getlistAll.js";

const router =
  express.Router();
router.get(
  "/getlistAll",
  (req, res) =>
    getlistAll(
      req,
      res
    )
);
export default router;
