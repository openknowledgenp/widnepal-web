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
  service: "Outlook365",
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
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `[WIDN] Subject: ${subject === '' ? 'No Subject' : subject}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
