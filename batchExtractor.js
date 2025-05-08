function extractEmailsFrom20Batches() {
  const batchSize = 100; // Threads per batch
  const totalBatches = 20; // Number of batches to process
  const emailSet = new Set();

  for (let batch = 0; batch < totalBatches; batch++) {
    const start = batch * batchSize;
    const threads = GmailApp.getInboxThreads(start, batchSize);
    Logger.log(`Processing batch ${batch + 1} (threads ${start} to ${start + batchSize})`);

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
  }

  Logger.log("Unique email addresses found:");
  Logger.log(Array.from(emailSet));
}
