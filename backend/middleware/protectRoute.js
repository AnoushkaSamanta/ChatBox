import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const protectRoute = async (req, res,next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized-no token provided" });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: "Unauthorized-invalid token" });
    }

    const user = await User.findById(decoded.userid);
    if (!user) {
        return res.status(404).json({ 
          error: "User not found", 
          details: { 
            userId: decoded.userId 
          }} )}
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;