function doGet() {

  const email = Session.getActiveUser().getEmail();

  return HtmlService.createHtmlOutput(
    "<h2>Correo detectado:</h2><p>" + email + "</p>"
  );

}
