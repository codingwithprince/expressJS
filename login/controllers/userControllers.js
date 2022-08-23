import userModel from "../model/userModel.js";

class userController {
  static home = async (req, res) => {
    try {
      res.render("index", { title: "home" });
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    try {
      res.render("login", { title: "login" });
    } catch (error) {
      console.log(error);
    }
  };

  static reg = async (req, res) => {
    try {
      res.render("register", { title: "registration" });
    } catch (error) {
      console.log(error);
    }
  };

  static createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const userDoc = userModel({
        name: name,
        email: email,
        pass: password,
      });

      const result = await userDoc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static verifyUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email});

      if(result != null) {
        if (result.email == email && result.pass == password) {
          res.redirect('/')
        } else {
          res.send('Pass vul')
        }
      } else {
        res.send('Not registered')
      }

    
    } catch (error) {
      console.log(error);
    }
  };
}

export default userController;
