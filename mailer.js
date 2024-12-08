import EkiliRelay from "ekilirelay";

const mailer = new EkiliRelay(
  import.meta.env.VITE_RELAY_API_KEY || "your-api-key"
);

export const sender = (to, subject, message, headers) => {
  mailer
    .sendEmail(to, subject, message, headers)
    .then((response) => {
      if (response.status === "success") {
        console.log("Email sent successfully.");
      } else {
        console.log("Failed to send email: " + response.message);
        console.log(response);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
