const { gradeRange } = require("./grade_range");
const { otherSubjects, otherSubjects_plus } = require("./grade_to_points");
const testResults = require("./testResults");

function calculateAps(results, subject_plus) {
  var total = 0;
  const res = results.map((sub) => {
    if (sub.subject === "life_orientation") {
      total = total + 0;
      return 0;
    } else {
      if (subject_plus) {
        total = total + otherSubjects_plus[gradeRange(sub)];
        return otherSubjects_plus[gradeRange(sub)];
      } else {
        total = total + otherSubjects[gradeRange(sub)];
        return otherSubjects[gradeRange(sub)];
      }
    }
  });
  return total;
}

module.exports = { calculateAps };
