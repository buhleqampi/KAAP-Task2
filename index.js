// // DELETE THE CLIENT'S NAME
function deleteClientName(emailBody) {
  let salutationRegex = /Sehr geehrter Herr[^,\n]*/;
  emailBody = emailBody.replace(salutationRegex, '');

  let greetingRegex = /Mit freundlichen Grüßen[^,\n]*/;
  emailBody = emailBody.replace(greetingRegex, '');

  if (
    emailBody.includes("Sehr geehrter Herr") ||
    emailBody.includes("Mit freundlichen Grüßen")
  ) {
    throw new Error("Client name not properly removed from email body.");
  }

  return emailBody;
}
debugger
const emailBody =
"Sehr geehrter Herr Qampi,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nMit freundlichen Grüßen,\nBuhle Qampi";

try {
  const newEmailBody = deleteClientName(emailBody);
  console.log(newEmailBody);
} catch (error) {
  console.error("Error:", error.message);
}
  