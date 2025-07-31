import express from "express";
import { addDoctor } from "../controllers/adminController";
import upload from "../middlewares/multer.js";
import adminController from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);

import { getAdminDashboard } from "../controllers/adminController.js";

router.get("/dashboard", getAdminDashboard);
export default adminRouter;
