const fs = require('fs');

const countStudents = (filename) => {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    // read file synchronously
    const data = fs.readFileSync(filename, 'utf-8');

    // Split data into lines & filter out empty line
    const lines = data.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        // Increments the length counter for each valid line (including the header)
        length += 1;
        // Splits the current line into an array of values using ','
        // as a delimiter, the field array represents the values in each column of the CSV
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        // populating the fields object
        // If fields already has a key for this field:
        // The count of students in this field is incremented
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
          // If fields does not have this key:
          // A new key is created with a count of 1
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    // total num of students is calculated by subtracting
    //  1 from length (because the header line is included in length)
    const l = length - 1;
    // log the number of students
    console.log(`Number of students: ${l}`);
    // Log the number of students in each field and the list of the firstname
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(
          `Number of students in ${key}: ${value}. List: ${students[key].join(
            ', '
          )}`
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// export the function
module.exports = countStudents;