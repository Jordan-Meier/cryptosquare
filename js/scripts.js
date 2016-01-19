var simplifyText = function (message) {
  message = message.toLowerCase();
  message = message.replace(/\s/g, '');
  message = message.replace(/[^A-Z0-9]/ig, "");
  return message;
}
