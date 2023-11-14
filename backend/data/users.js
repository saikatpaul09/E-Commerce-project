import bcrypt from "bcryptjs";

export const users = [
  {
    name: "admin user",
    email: "admin@123",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "admin2 user",
    email: "admin2@123",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "admin3 user",
    email: "admin3@123",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
