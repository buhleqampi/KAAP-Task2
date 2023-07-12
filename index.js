// // DELETE THE CLIENT'S NAME
function deleteClientName(emailBody) {
  let client = /Herr Krause[^, \n]*/;
  emailBody = emailBody.replace(client, "");

  let person = /Werner Muster[^, \n]*/;
  emailBody = emailBody.replace(person, "");

  if (
    emailBody.includes("Herr Krause") ||
    emailBody.includes("Werner Muster")
  ) {
    throw new Error("Client name not properly removed from email body.");
  }

  return emailBody;
}
debugger
const emailBody =
  "Sehr geehrter Herr Krause \n können Sie mir einen aktuellen Sachstand in meiner Angelegenheit geben? Wie geht es weiter. \n Liebe Grüße \n Werner Muster";

try {
  const newEmailBody = deleteClientName(emailBody);
  console.log(newEmailBody);
} catch (error) {
  console.error("Error:", error.message);
}
