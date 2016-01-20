var simplifyText = function (message) {
  message = message.toLowerCase();
  message = message.replace(/\s/g, '');
  message = message.replace(/[^A-Z0-9]/ig, "");
  return message;
}




var gridText = function (message) {
  var length = message.length;
  var squareRoot = Math.sqrt(length);
  return squareRoot;
}



var cryptosquare = function (message) {
  message = simplifyText(message);
  return message;
}
