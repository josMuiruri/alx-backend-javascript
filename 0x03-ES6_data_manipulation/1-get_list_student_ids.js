function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

const students = [
  { id: 1, firstName: "Guillaume", location: "San Francisco" },
  { id: 2, firstName: "james", location: "Columbia" },
  { id: 5, firstName: "Serena", location: "San Francisco" },
];

console.log(getListStudentIds(students));
console.log(getListStudentIds("teacher"));
