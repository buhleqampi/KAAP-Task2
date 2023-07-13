// // DELETE THE CLIENT'S NAME
function deleteClientName(emailBody) {
  let salutation = /Sehr geehrter Herr[^,\n]*/;
  emailBody = emailBody.replace(salutation, '');

  if (
    emailBody.includes("Sehr geehrter Herr") 
  ) {
    throw new Error("Client name not properly removed from email body.");
  }

  return emailBody;
}
debugger
const emailBody =
"Sehr geehrter Herr Krause,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.";

try {
  const newEmailBody = deleteClientName(emailBody);
  console.log(newEmailBody);
} catch (error) {
  console.error("Error:", error.message);
}
  
