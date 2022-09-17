const { gradeRange } = require("./grade_range");
const {
  english_math,
  life_orientation,
  otherSubjects_plus,
} = require("./grade_to_points");
const { results2 } = require("./testResults");

function calcEnglishMath(subject) {
  return english_math.uwc[gradeRange(subject)];
}
function calcLife_Orienation(subject) {
  return life_orientation.uwc[gradeRange(subject)];
}

function wits_calculateAps(results) {
  var total = 0;
  const res = results.map((sub) => {
    if (
      sub.subject === "mathematics" ||
      sub.subject === "english" ||
      sub.subject === "mathematical literacy"
    ) {
      total = total + calcEnglishMath(sub);
      return calcEnglishMath(sub);
    } else if (sub.subject === "life_orientation") {
      total = total + calcLife_Orienation(sub);
      return calcLife_Orienation(sub);
    } else {
      total = total + otherSubjects_plus[gradeRange(sub)];
      return otherSubjects_plus[gradeRange(sub)];
    }
  });
  return `Your APS is : ${total} points at uwc`;
}

console.log(wits_calculateAps(results2));
