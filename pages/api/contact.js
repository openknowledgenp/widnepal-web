import nodemailer from "nodemailer"


// var transporter = nodemailer.createTransport({
//        service: "Gmail",
//        auth: {
//            user: process.env.CONTACT_GMAIL_USER,
//            pass: process.env.CONTACT_GMAIL_PASSWORD
//        }
//    });

// var transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//        auth: {
//            user: process.env.CONTACT_GMAIL_USER,
//            pass: process.env.CONTACT_GMAIL_PASSWORD
//        }
//    });


const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secureConnection: false,
  tls: { ciphers: 'SSLv3' },
  auth: {
    user: process.env.CONTACT_EMAIL_USER, // add user
    pass: process.env.CONTACT_EMAIL_PASSWORD, // add password
  }
})


export default async (req, res) => {
    const { email, full_name, message, subject } = req.body
    const recipientMail = process.env.RECEIPIENT_MAIL

    if (email === "" || full_name === "" || message === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ email, full_name, text: message, recipientMail, subject })
    res.send(mailerRes)
}

const mailer = ({ email, full_name, text, recipientMail, subject }) => {
    const from = full_name && email ? `${full_name} <${email}>` : `${full_name || email}`
    const html_text = `
      <div style="font-size:16px">
        <div style="padding: 5px; background-color: #1d6daa; color: white; font-size: 18px"><b>This email is received from womenindatanepal website's contact form.</b></div>
        <div style="margin-top: 20px"><b>Sent By:</b> ${full_name}</div>
        <div><b>User Email:</b> ${email}</div>
        <div><b>Subject:</b> ${subject}</div>
        <div style="margin-bottom: 20px"><b>Message:</b> ${text}</div>
        <b>You may reply to this user's email by replying this email.</b>
      <div>
    `
    const message = {
        from: process.env.CONTACT_EMAIL_USER,
        to: `${recipientMail}`,
        subject: `[WIDN] Contact Us Message`,
        html: html_text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
