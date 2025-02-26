import jwt from "jsonwebtoken";

const generateToken = (userid, res) => {
  
  
  const token = jwt.sign({ userid }, "9aTepqFWkRcBsB3ZWBkxKYCkN+Dm53FTzOEEMAI13Vs=", {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure:process.env.NODE_ENV!=="development"
  });
};

export default generateToken;
