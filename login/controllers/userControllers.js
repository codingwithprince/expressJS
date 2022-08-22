import userModel from "../model/userModel.js";

class userController {
  static home = async (req, res) => {
    try {
      res.render("index", { title: 'home'});
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    try {
      res.render("login", { title: 'login'});
    } catch (error) {
      console.log(error);
    }
  };

  static reg = async (req, res) => {
    try {
      res.render("register", { title: 'registration'});
    } catch (error) {
      console.log(error);
    }
  };

  static regPost = async (req, res) => {
    try {
      console.log(req.body);
      res.redirect('/')
    } catch (error) {
      console.log(error);
    }
  };

  static createUser = async (req, res) => {
    try {
      const user = {
        name: "prince",
        email: "prince@gmail.com",
        pass: "123456",
      };
      const userDoc = userModel(user);
      const result = await userDoc.save();
      console.log(result);
      res.send("created..");
    } catch (error) {
      console.log(error);
    }
  };
}

export default userController;
