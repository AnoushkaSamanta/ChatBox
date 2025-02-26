import { getUsersForSidebar } from "../controllers/usercontroller.js";
import protectRoute from "../middleware/protectRoute.js";
import express from "express";


const router=express.Router();

router.get("/",protectRoute,getUsersForSidebar)

export default router;