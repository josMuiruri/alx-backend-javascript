const fs = require('node:fs');

const countStudents = (path) => {
  try {
    // read file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split data into lines & filter out empty line
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header (first line)
    const header = lines.shift();

    // Initialize an object
    const studentsByField = {};

    // Process each line
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      // ensure the field exist in the object
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      //   add the student's firstname to the appropriate field
      studentsByField[field].push(firstname);
    });

    // log the number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and the list of the firstname
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// export the function
module.exports = countStudents;
