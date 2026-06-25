const axios = require("axios");

console.log("🔥 SENDEMAIL LOADED 🔥");
console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
console.log(
  "BREVO_API_KEY starts with:",
  process.env.BREVO_API_KEY
    ? process.env.BREVO_API_KEY.substring(0, 10)
    : "undefined"
);

const sendDateAcceptedEmail = async (
  askerEmail,
  askerName,
  receiverName,
  chosenDate,
  foodVibe
) => {
  try {
    console.log("Sending email to:", askerEmail);

    const payload = {
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
          <strong>${receiverName}</strong> accepted your invitation!
        </p>

        <p>
          <strong>Date:</strong> ${chosenDate}<br>
          <strong>Food Vibe:</strong> ${foodVibe}
        </p>

        <p>Have fun! 🌹</p>
      `,
    };

    console.log("Header key exists:", !!process.env.BREVO_API_KEY);

    const response = await axios({
      method: "POST",
      url: "https://api.brevo.com/v3/smtp/email",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
      data: payload,
    });

    console.log("✅ EMAIL SENT");
    console.log(response.data);
  } catch (error) {
    console.error("❌ EMAIL ERROR");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error);
    }
  }
};

module.exports = sendDateAcceptedEmail;