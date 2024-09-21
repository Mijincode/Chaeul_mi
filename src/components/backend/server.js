require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
const port = 3001;

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust this to match your React app's URL
  })
);

app.use(bodyParser.json());

// Load environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// In-memory store for booked times (use a database in production)
let bookedTimes = [];

app.post("/booking", (req, res) => {
  const { clientPhoneNumber, ownerPhoneNumber, date, time } = req.body;

  // Validate phone numbers and other data
  if (!clientPhoneNumber || !ownerPhoneNumber || !date || !time) {
    return res.status(400).send("Missing parameters in the request");
  }

  // Save booking
  bookedTimes.push({ date, time });

  // Send SMS to client
  client.messages
    .create({
      body: `예약 ${date} , ${time} 완료되었습니다.`,
      from: twilioPhoneNumber,
      to: clientPhoneNumber,
    })
    .then((message) => console.log("Client SMS sent:", message.sid))
    .catch((error) => {
      console.error("Error sending client SMS:", error);
      return res.status(500).send("Error sending SMS to client");
    });

  // Send SMS to owner
  client.messages
    .create({
      body: `New booking for ${date} at ${time}. Client phone: ${clientPhoneNumber}.`,
      from: twilioPhoneNumber,
      to: ownerPhoneNumber,
    })
    .then((message) => console.log("Owner SMS sent:", message.sid))
    .catch((error) => {
      console.error("Error sending owner SMS:", error);
      return res.status(500).send("Error sending SMS to owner");
    });

  res.status(200).send("예약이 완료되었습니다.");
});

app.get("/booked-times", (req, res) => {
  res.json(bookedTimes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
