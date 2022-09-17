const { gradeRange } = require("./grade_range");
const { life_orientation } = require("./grade_to_points");
const { results2 } = require("./testResults");

function gradeRangeConvertion(subject) {
  const { grade } = subject;

  const converted = grade / 10;
  return converted;
}

function wsu_calculateAps(results, subject_plus) {
  var total = 0;
  const res = results.map((sub) => {
    if (
      sub.subject === "life_orientation" ||
      sub.subject === "mathematical literacy"
    ) {
      total = total + life_orientation.wsu[gradeRange(sub)];
      return life_orientation.wsu[gradeRange(sub)];
    } else {
      total = total + gradeRangeConvertion(sub);
      return gradeRangeConvertion(sub);
    }
  });
  return `Your APS is : ${total} points at wsu ${res}`;
}

console.log(wsu_calculateAps(results2));
