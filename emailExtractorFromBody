function extractEmailsFromBody() {
  var threads = GmailApp.getInboxThreads(0, 100); // Adjust the number for more threads
  var emailSet = new Set();

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var body = messages[j].getBody();
      var matches = body.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
      if (matches) {
        matches.forEach(email => emailSet.add(email));
      }
    }
  }

  Logger.log(Array.from(emailSet)); // View in View > Logs or Console
}
