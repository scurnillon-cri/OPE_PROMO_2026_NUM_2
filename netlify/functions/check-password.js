exports.handler = async (event) => {
  // On récupère le mot de passe envoyé par l'utilisateur
  const { password } = JSON.parse(event.body);

  // Le "Vrai" mot de passe est stocké dans les réglages de Netlify (Etape 4)
  const truePassword = process.env.SITE_PASSWORD;

  if (password === truePassword) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Accès autorisé !" }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({
        success: false,
        message: "Mot de passe incorrect.",
      }),
    };
  }
};
