const ADMINISTRADORES = [
  "jorge.ariza@atlascopco.com",
  "mario.ruiz@atlascopco.com"
];

function doGet() {

  const email = Session.getActiveUser().getEmail();

  if (ADMINISTRADORES.includes(email)) {
    return HtmlService.createHtmlOutput("<h1>ADMIN</h1>");
  }

  return HtmlService.createHtmlOutput("<h1>CONSULTA</h1>");
}
