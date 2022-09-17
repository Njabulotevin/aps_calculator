const { gradeRange } = require("./grade_range");
const { otherSubjects, otherSubjects_plus } = require("./grade_to_points");
const testResults = require("./testResults");

function nmu_calculateAps(results, subject_plus) {
  var total = 0;

  const res = results.map((sub) => {
    if (sub.subject === "life_orientation") {
      total = total + 0;
      return 0;
    } else {
      total = total + sub.grade;
      return sub.grade;
    }
  });
  return `Your Application Score is : ${total} points at nmu`;
}

module.exports = {nmu_calculateAps}
