import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'

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

  // static createUser = async (req, res) => {
  //   try {
  //     const { name, email, password } = req.body;

  //     const userDoc = userModel({
  //       name: name,
  //       email: email,
  //       pass: password,
  //     });

  //     const result = await userDoc.save();
  //     res.redirect("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

 
  static createUser = async (req, res) => {   // password with hash
    try {
      const { name, email, password } = req.body;
      const hashPass = await bcrypt.hash(password, 10) 
      const userDoc = userModel({
        name: name,
        email: email,
        pass: hashPass,
      });

      const result = await userDoc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // static verifyUser = async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const result = await userModel.findOne({ email: email});

  //     if(result != null) {
  //       if (result.email == email && result.pass == password) {
  //         res.redirect('/')
  //       } else {
  //         res.send('Pass vul')
  //       }
  //     } else {
  //       res.send('Not registered')
  //     }

    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  static verifyUser = async (req, res) => { //verify hash password
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email});
      if(result != null) {
        // comparing hash password
        const isMatched = await bcrypt.compare(password, result.pass)
        if (result.email == email && isMatched) {
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
