function doGet() {

  const email = Session.getActiveUser().getEmail();

  const admins = [
    "jorge.ariza@atlascopco.com",
    "mario.ruiz@atlascopco.com"
  ];

  if(admins.includes(email)){
      return HtmlService
          .createHtmlOutputFromFile("index");
  }

  return HtmlService
      .createHtmlOutputFromFile("Consulta");
}
