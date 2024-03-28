import jwt from "jsonwebtoken";
const generateToken = (res, userId) => {
  const token = jwt.sign(
    {
      userId: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "20d",
    }
  );

  //set JWT as http-cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 1000, //30 days
  });
};

export default generateToken;
