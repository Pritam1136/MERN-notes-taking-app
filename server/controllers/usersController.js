const User = require("../modals/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signUp(req, res) {
  try {
    // Create a user
    const { email, password } = req.body;

    //   hash password
    const hashPassword = bcrypt.hashSync(password, 8);

    // Create a user with the data
    await User.create({ email, password: hashPassword });

    // respond
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function logIn(req, res) {
  try {
    // Get the email and password off rq body
    const { email, password } = req.body;

    // Find the user with requested email
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(400);

    // Compare send in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);

    // create a jwt token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    // Set the cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // send jwt token
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
}

async function logOut(req, res) {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
}

async function checkAuth(req, res) {
  // console.log(req.user);
  res.sendStatus(200);
}

module.exports = { signUp, logIn, logOut, checkAuth };
