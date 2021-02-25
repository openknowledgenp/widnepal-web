const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser')
const mailer = require('./mailer');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json())

    server.post('/api/contact', (req, res) => {
      const { email, name, message } = req.body
      console.log(email)


      //send mail 
      mailer({ email, name, message }).then(() => {
        console.log('success')
        res.send('success')
      }).catch((error) => {
        console.log('failed')
        res.send('badddd')
      })

    })

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Next.js ready on http://localhost:3000");
    });

  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });