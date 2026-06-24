const { Brevo } = require("@getbrevo/brevo");

const client = new Brevo({
  apiKey: process.env.BREVO_API_KEY,
});

const sendDateAcceptedEmail = async (
  askerEmail,
  askerName,
  receiverName,
  chosenDate,
  foodVibe
) => {
  try {
    const result = await client.sendEmail({
      sender: {
        name: "BeMyDate",
        email: "bellacruz.ph@gmail.com",
      },

      to: [
        {
          email: askerEmail,
          name: askerName,
        },
      ],

      subject: "Your date request was accepted! 💕",

      htmlContent: `
        <h2>Good news, ${askerName}! 💌</h2>

        <p>
          <strong>${receiverName}</strong> accepted your date invitation!
        </p>

        <p>
          <strong>Date:</strong> ${chosenDate}<br/>
          <strong>Food Vibe:</strong> ${foodVibe}
        </p>

        <p>Have fun! 🌹</p>
      `,
    });

    console.log("EMAIL SENT");
    console.log(result);

  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);
  }
};

module.exports = sendDateAcceptedEmail;