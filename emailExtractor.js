function listEmailAddresses() {
  var threads = GmailApp.getInboxThreads();
  var emails = new Set();

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var from = messages[j].getFrom();
      var to = messages[j].getTo();
      emails.add(from);
      emails.add(to);
    }
  }

  Logger.log(Array.from(emails));
}
