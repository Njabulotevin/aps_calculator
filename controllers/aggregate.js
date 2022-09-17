const { gradeRange } = require("./grade_range");
const { otherSubjects, otherSubjects_plus } = require("./grade_to_points");
const testResults = require("./testResults");

function calculateAggregate(results, subject_plus) {
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
  return total / 6;
}

module.exports ={calculateAggregate}
