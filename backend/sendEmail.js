console.log("STEP 1");

await transporter.verify();

console.log("STEP 2");

const info = await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: askerEmail,
  subject: "Your date request was accepted! 💕",
  html: "<h1>Test</h1>",
});

console.log("STEP 3");
console.log(info);