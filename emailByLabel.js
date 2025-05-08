function extractEmailsFromLabel() {
  const label = GmailApp.getUserLabelByName("YourLabelName"); // e.g., "Clients", "Leads/Inbound"
  const threads = label.getThreads(); // All threads in that label
  const emailSet = new Set();

  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();
    for (let j = 0; j < messages.length; j++) {
      const body = messages[j].getBody();
      const matches = body.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
      if (matches) {
        matches.forEach(email => emailSet.add(email));
      }
    }
  }

  Logger.log(`Unique email addresses in label 'YourLabelName':`);
  Logger.log(Array.from(emailSet));
}
