const results = require("./testResults");

class UctResults {
  constructor(FPS, WPS, APS, disadvantage_Factor) {
    this.APS = APS;
    this.WPS = WPS;
    this.FPS = FPS;
    this.disadvantage_Factor = disadvantage_Factor;
  }
}

function uct_calculateAps(results) {
  var total = 0;

  results.map((sub) => {
    if (sub.subject === "life_orientation") {
      total = total + 0;
      return 0;
    } else {
      total = total + sub.grade;
    }
  });
  const wps = total + total * 0.1;
  const findings = new UctResults(
    `${total} points`,
    `${wps} points`,
    `${total} points`,
    `${total * 0.1} points`
  );

  //return `Your FPS is : ${total} points at uct?/`;
  findings.APS;
  //console.table(findings);
  return total;
}

uct_calculateAps(results.results);
