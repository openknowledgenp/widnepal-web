const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secureConnection: false,
  tls: { ciphers: 'SSLv3' },
  auth: {
    user: '', // add user
    pass: '', // add password
  }
})

const send = ({ email, name, message }) => {
  const from = email
  const payload = {
    from: 'emailserver@oknp.org',
    to: email,
    subject: `New message from ${from}`,
    message,
    replyTo: from,
    html: 'hello world',
    text: 'hello world'
  }

  return new Promise((resolve, reject) => {
    console.log('sending email')
    transporter.sendMail(payload, (error, info) =>{
      return error ? reject(error) : resolve(info)

    }
      
    )
  })
  
}

module.exports = send