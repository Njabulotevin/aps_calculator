const { results2, results } = require("./testResults");

function gradeRange(subject) {
  const { grade } = subject;

  const converted = grade / 10;
  return converted;
}

function findBest(results) {
  const excludeRequiredSubjects = results.filter((sub) => {
    return (
      sub.subject !== "english" &&
      sub.subject !== "mathematics" &&
      sub.subject !== "physical_sciences" &&
      sub.subject !== "accounting" &&
      sub.subject !== "life_orientation"
    );
  });
  return excludeRequiredSubjects;
}

function hasScience(results) {
  const findMathScience = results.find((sub) => {
    return sub.subject === "physical_sciences";
  });
  if (typeof findMathScience === "undefined") {
    return false;
  } else {
    return true;
  }
}

function hasAccounting(results) {
  const findAccounting = results.find((sub) => {
    return sub.subject === "accounting";
  });
  if (typeof findAccounting === "undefined") {
    return false;
  } else {
    return true;
  }
}

function rhodes_calculateAps(results, method) {
  var total = 0;
  switch (method) {
    case "method 1":
      results.map((sub) => {
        if (sub.subject === "life_orientation") {
          total = total + 0;
          return 0;
        } else {
          total = total + gradeRange(sub);
          return gradeRange(sub);
        }
      });
    case "method 2":
      results.map((sub) => {
        if (sub.subject === "life_orientation") {
          total = total + 0;
          return 0;
        } else if (
          sub.subject === "mathematics" ||
          sub.subject === "physical_sciences"
        ) {
          total = total + gradeRange(sub) * 2;
          return gradeRange(sub);
        } else {
          total = total + gradeRange(sub);
          return gradeRange(sub);
        }
      });
  }
  return `Your APS is : ${total} points at Rhodes`;
}

module.exports = {rhodes_calculateAps}
