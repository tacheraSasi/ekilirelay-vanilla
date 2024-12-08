export function sender(to, subject, message, headers = "", apikey = "") {
  const url = "https://relay.ekilie.com/api/index.php";

  // Prepare the payload
  const payload = {
    to,
    subject,
    message,
    headers,
    apikey,
  };

  // Send POST request
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      console.log("Message sent successfully:", data);
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      alert("Failed to send the message.");
    });
}
