const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, password, email, role } = req.body;

  // Check if user already exists
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({ name, password: hashedPassword, email, role });

  await newUser.save();

  // Generate a token for the new user
  const token = jwt.sign(
    { id: newUser._id, email: newUser.email, role: newUser.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );

  // Set token in a cookie (optional)
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict",
  });

  // Respond with user info and token
  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      token, // Optionally include the token in response
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Generate a unique token for the user
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );

  // Set token in a cookie (optional)
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  // Respond with success message and user info
  res.json({
    message: "Login successful",
    data: {
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      token,
    },
  });
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

module.exports = { register, login, logout };
