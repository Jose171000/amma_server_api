import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());


app.post("/enviar-correo", (req, res) => {
  const { email, subject, message, user, pass } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user, // Usa tu dirección de correo
      pass, // Usa una contraseña de aplicación generada en Gmail (no la contraseña normal)
    },
  });

  // Define las opciones del correo
  const mailOptions = {
    from: user,
    to: email, // Dirección del destinatario
    subject: subject, // Asunto del correo
    text: message, // Mensaje del correo
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
      return res.status(500).send("Error al enviar el correo");
    }
    console.log("Correo enviado:", info.response);
    res.status(200).send("Correo enviado con éxito");
  });
});

app.get("/", (req, res) => {
  res.send("Bienvenido a la API externa de AMMA BEAUTY");
});

app.listen(3000, () => {
  console.log("Servidor escuchando el puerto 3000");
});
