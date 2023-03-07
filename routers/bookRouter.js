
const express= require("express");
const router= express.Router();
const bookController= require("../controllers/bookController")

router.route("/").get(bookController.homePage)
router.route("/contact").get(bookController.contactUs)
router.route("/book").get(bookController.books)
router.route("/dashboard").get(bookController.Dashboard)



module.exports=router

