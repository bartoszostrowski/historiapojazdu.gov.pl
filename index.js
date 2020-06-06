var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get('/', (req, res) => res.json({"message": "Welcome to HistoriaPojazdu.gov.pl REST API"}));

app.get("/car/:regPlate/:vin/:regDate", (req, res, next) => {
  const regPlate = req.params.regPlate;
  const vin = req.params.vin;
  const regDate = req.params.regDate;

  res.json({"regPlate": regPlate, "vin": vin, "regDate": regDate});
});
