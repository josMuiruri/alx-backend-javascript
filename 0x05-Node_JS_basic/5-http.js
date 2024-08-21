const fs = require('fs');
const http = require('http');
const url = require('url');

const countStudents = (fileName) => {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
};

const app = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/') {
    res.writeHead(200, {
      'content-length': 'text/plain',
    });
    res.end('Hello Holberton School!');
  } else if (pathName === '/students') {
    res.end('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

app.listen(1245, '127.0.0.1', () => {});

module.exports = app;