require("dotenv").config();
import nodemailer from "nodemailer";

// const nodemailer = require("nodemailer");
let sendSimpleEmail = async (dataSend) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
        });
    // send mail with defined transport object
    console.log("getBodyHTMLEmail(dataSend) = ", getBodyHTMLEmail(dataSend));
    const info = await transporter.sendMail({
        from: '"Booking CARE 👻" <thinh.nguyen0908117036@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh", // Subject line
        // text: "Hello world?", // plain text body
        html: getBodyHTMLEmail(dataSend), // html body
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = "";
    console.log("dataSend = ", dataSend);
    if (dataSend.language === "vi") {
        result = `
            <h3>Xin chào ${dataSend.patientName}</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Hỏi dân it</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
            <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới:</p>
            <div>
                <a href=${dataSend.redirectLink} target="_blank">Click here</a>
            </div>
            <div>Xin chân thành cảm ơn</div>
        `
    }
    if (dataSend.language === "en") {
        result = `
            <h3>Xin chào ${dataSend.patientName}</h3>
            <p>You received this email because you booked an online medical appointment on Ask People It.</p>
            <p>Appointment information:</p>
            <div><b>Time: ${dataSend.time}</b></div>
            <div><b>Doctor: ${dataSend.doctorName}</b></div>
            <p>If the above information is true, please click on the link below:</p>
            <div>
                <a href=${dataSend.redirectLink} target="_blank">Click here</a>
            </div>
            <div>Sincerely thank</div>
        `
    }
    console.log("result = ", result);
    return result;
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = "";
    if (dataSend.language === "vi") {
        result = `
            <h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Hỏi dân it channel thành công</p>
            <p>Thông tin hoá đơn/đơn thuốc được gửi trong file đính kèm</p>
            <div>Xin chân thành cảm ơn</div>
        `
    }
    if (dataSend.language === "en") {
        result = `
            <h3>Dear ${dataSend.patientName}!</h3>
            <p>You received this email because you booked an online medical appointment on Ask People It.</p>
            <p>bla bla</p>

            <div>Sincerely thank</div>
        `
    }
    console.log("result = ", result);
    return result;
}

let sendAttachment =  (dataSend) => {
    return new Promise(async (resolve, reject) => {

        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: process.env.EMAIL_APP,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
                });
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"BOOKING CARE 👻" <thinh.nguyen0908117036@gmail.com>', // sender address
                to: dataSend.email, // list of receivers
                subject: "Thông tin đặt lịch khám bệnh", // Subject line
                // text: "Hello world?", // plain text body
                html: getBodyHTMLEmailRemedy(dataSend), // html body
                attachments: [
                    {
                        filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: "base64"
                    }
                ]
            });
            console.log("check infor send email: ");
            resolve();
        }catch(e) {
            reject(e);
        }
    })
    
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment
}