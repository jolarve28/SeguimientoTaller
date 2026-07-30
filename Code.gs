const ADMINISTRADORES = [
  "jorge.ariza@atlascopco.com",
  "mario.ruiz@atlascopco.com"
];

function doGet() {

  const email = Session.getActiveUser().getEmail();

  if (ADMINISTRADORES.includes(email)) {

    return HtmlService
      .createHtmlOutputFromFile("index")
      .setTitle("Panel Administrador");

  }

  return HtmlService
    .createHtmlOutputFromFile("Consulta")
    .setTitle("Consulta de Equipos");
}