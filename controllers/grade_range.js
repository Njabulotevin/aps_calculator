function gradeRange(subject) {
  const { grade } = subject;

  if (grade <= 29) {
    return 29;
  } else if (grade <= 39 && grade > 29) {
    return 39;
  } else if (grade <= 49 && grade > 39) {
    return 49;
  } else if (grade <= 59 && grade > 49) {
    return 59;
  } else if (grade <= 69 && grade > 59) {
    return 69;
  } else if (grade <= 79 && grade > 69) {
    return 79;
  } else if (grade <= 89 && grade > 79) {
    return 89;
  } else {
    return 100;
  }
}

module.exports = { gradeRange };
