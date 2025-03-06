import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Grid from "@mui/material/Grid"; // Importez le composant Grid

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ndpdnoc",
          "template_e4ilka3",
          form.current,
          "AekYDn0jA9RlCSWi8"
        )
        .then(() => {
          alert("Message envoyé avec succès !");
          form.current?.reset();
        })
        .catch(() => {
          alert("Une erreur est survenue lors de l'envoi du message.");
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contactez-moi</h1>
          <p>
            Vous avez un projet à réaliser ? Collaborons ensemble pour le concrétiser !
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Votre nom"
                  name="name"
                  autoComplete="name"
                  fullWidth
                  InputProps={{ style: { backgroundColor: "white" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Email / Téléphone"
                  name="contact"
                  autoComplete="email"
                  fullWidth
                  InputProps={{ style: { backgroundColor: "white" } }}
                />
              </Grid>
            </Grid>
            <TextField
              required
              label="Message"
              name="message"
              multiline
              rows={10}
              autoComplete="off"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
              sx={{ mt: 2 }} // Espacement en haut
            />
            {/* Utilisez Box pour aligner le bouton à droite */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
              >
                Envoyer
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;