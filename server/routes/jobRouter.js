import express from "express";
import { deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob } from "../controllers/jobControllers.js";
import {isAuthorized} from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post",isAuthorized, postJob);
router.get("/getMyJobs",isAuthorized, getMyJobs);
router.put("/update/:id",isAuthorized, updateJob);
router.delete("/delete/:id",isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSingleJob);

export default router;