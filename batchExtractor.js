function extractEmailsInBatches() {
  const batchSize = 100; // how many threads to process at once
  const start = 0; // change this number to process the next batch
  const threads = GmailApp.getInboxThreads(start, batchSize);
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

  Logger.log(`Batch starting at ${start}:`, Array.from(emailSet));
}
