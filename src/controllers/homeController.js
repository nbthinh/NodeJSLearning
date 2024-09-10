import db from "../models/index"
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    // let data = await db.User.findAll();
    // console.log("data = ", data);
    return res.render("homepage.ejs", {
        data: JSON.stringify({})
    })
}

let getAboutPage = (req, res) => {
    return res.render("./test/about.ejs");
}
let getCRUD = (req, res) => {
    // return res.send("Hello getCRUD");
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {
    console.log("HELLO WORLD = ", req.body);
    let message = await CRUDService.createNewUser(req.body);
    console.log("Message = ", message);
    return res.send("POSTCRUD");
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render("displayCRUD.ejs", {
        dataTable: data
    });
}


let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log("userId = ", userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        console.log("userData = ", userData);
        res.render("editCRUD.ejs", {
            user: userData
        });
    }
    else {
        res.send("User not find ");
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;

    let allUsers = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        res.send("Delete the user succeed");
    }
    else {
        res.send("User not found!");
    }
}   

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}