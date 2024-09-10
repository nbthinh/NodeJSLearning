import db from "../models/index";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }
        catch(e) {
            reject(e);
        }
    })
}


let handleUserLogin = (email, password) => {
    console.log("email = ", email);
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            console.log("Hello world = ", isExist);
            if (isExist) {
                // User already exist
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ["id", "email", "password", "roleId", "firstName", "lastName"], raw: true
                })
                if (user) {
                    // Compare password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "OK";
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = "Wrong Password!";
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = "User's not found";
                }
            }
            else {
                // return error
                userData.errCode = 1;
                userData.errMessage = "Your email isn't exist in our system. Plz try other email!"
            }
            resolve(userData);
        }
        catch(e) {
            reject(e);
        }
    })
}

let compareUserPassword = () => {
    return new Promise(async (resolve, reject) => {
        try {

        }catch(e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: userEmail
                }
            })
            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }
        catch(e) {
            reject(e);
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let allUsers = '';
            if (userId === "ALL") {
                allUsers = await db.User.findAll({
                    attributes: {
                        include: [],
                        exclude: ['password']
                    },
                });

            }
            if (userId && userId != "ALL") {
                allUsers = await db.User.findOne({
                    where: {id: userId},
                    attributes: {
                        include: [],
                        exclude: ['password']
                    },
                })
            }
            resolve(allUsers);
        }
        catch(e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: "Your email is already in use. Plz try another email"
                })
            }
            else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                try {
                    await db.User.create({
                        email: data.email,
                        password: hashPasswordFromBcrypt,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        gender: data.gender,
                        roleId: data.roleId,
                        positionId: data.positionId,
                        image: data.avatar
                    });
                    resolve({
                        errCode: 0, message: "OK"
                    });
                }
                catch(e) {
                    
                }
            }
        }catch(e) {
            console.log("Hello world catch");
            reject(e);
        }
    })
}


let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.User.findOne({
            where: {id: userId}
        })
        if (!user) {
            // Nếu user không tồn tại sẽ trả về undefined
            resolve({
                errCode: 2,
                errMessage: "The user is'nt existed"
            })
        }
        // await user.destroy();

        await db.User.destroy({
            where: {id: userId}
        })
        resolve({
            errCode: 0,
            message: "The user is deleted"
        })
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.roleId || !data.positionId || !data.gender) {
                resolve({
                    errCode: 2,
                    errMessage: "Missing required parameters!"
                })
            }
            let user = await db.User.findOne({
                where: {
                    id: data.id
                },
                raw: false
            })
            // console.log("user = ", user);
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.roleId = data.roleId;
                user.positionId = data.positionId;
                user.gender = data.gender;
                user.phoneNumber = data.phoneNumber;
                if (data.avatar) {
                    user.image = data.avatar;
                }
                await user.save();

                // await db.User.save({
                //     firstName: data.firstName,
                //     lastName: data.lastName,
                //     address: data.address
                // })
                resolve({
                    errCode: 0,
                    message: "Update the user succeeds!"
                })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: "User not found"
                });
            }
        }catch (e) {
            reject(e);
        }
    })
}

let getAllCodeService = (typeInput) => {
    return new Promise( async (resolve, reject) => {
        try{
            
            if (!typeInput) {
                resolve({
                    errCode: 1, 
                    errMessage: "Missing required parameters"
                })
            }
            else {
                let res = {};
                let allCode = await db.Allcode.findAll({
                    where: {
                        type: typeInput
                    }
                });
                res.errCode = 0;
                res.data = allCode;
                resolve(res);
            }
        }catch(e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin : handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeService: getAllCodeService
}