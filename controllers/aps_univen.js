const { results2 } = require("./testResults");

function gradeRange(subject) {
  const { grade } = subject;

  const converted = grade / 10;
  return converted;
}

function univen_calculateAps(results, subject_plus) {
  var total = 0;
  const res = results.map((sub) => {
    if (sub.subject === "life_orientation") {
      total = total + 0;
      return 0;
    } else {
      if (sub.grade <= 29 || sub.grade <= 39) {
        total = total + 0;
        return 0;
      } else {
        total = total + gradeRange(sub);
        return gradeRange(sub);
      }
    }
  });
  return total;
}

module.exports = {univen_calculateAps}
