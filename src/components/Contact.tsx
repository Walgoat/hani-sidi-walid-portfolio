import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des champs
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      console.log('Formulaire soumis avec succès !');
      // Ici, vous pouvez ajouter la logique pour envoyer l'email
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contactez-moi</h1>
          <p>Vous avez un projet à réaliser ? Collaborons ensemble pour le concrétiser !</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                name="name"
                label="Votre nom"
                placeholder="Quel est votre nom ?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log('Nom:', e.target.value); // Vérification
                  setNameError(false); // Réinitialiser l'erreur lors de la saisie
                }}
                error={nameError}
                helperText={nameError ? "Veuillez entrer votre nom" : ""}
                autoComplete="name"
              />
              <TextField
                required
                id="contact-field"
                name="contact"
                label="Email / Téléphone"
                placeholder="Comment puis-je vous contacter ?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log('Email:', e.target.value); // Vérification
                  setEmailError(false); // Réinitialiser l'erreur lors de la saisie
                }}
                error={emailError}
                helperText={emailError ? "Veuillez entrer votre email ou numéro de téléphone" : ""}
                autoComplete="email"
              />
            </div>
            <TextField
              required
              id="message-field"
              name="message"
              label="Message"
              placeholder="Envoyez-moi vos questions ou demandes"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                console.log('Message:', e.target.value); // Vérification
                setMessageError(false); // Réinitialiser l'erreur lors de la saisie
              }}
              error={messageError}
              helperText={messageError ? "Veuillez entrer un message" : ""}
              autoComplete="off"
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Envoyer
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;