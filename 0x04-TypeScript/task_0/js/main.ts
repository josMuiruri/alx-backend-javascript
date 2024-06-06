interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "Mary",
  lastName: "Ann",
  age: 23,
  location: "Marsabit"
  }

const student2: student = {
  firstName: "Joseph",
  lastName: "Muiruri",
  age: 22,
  location: "Ethiopia"
}

const studentsList: student[] = [student1, student2]

const table = document.createElement('table')
const headerRow = table.insertRow()

const headers = ['First Name', 'Location']
for (const headerText of headers) {
  const header = document.createElement('h')
  const textNode = document.createTextNode(headerText)
  header.appendChild(textNode)
  headerRow.appendChild(header)
}

for (const Student of studentsList) {
  const row = table.insertRow()
  const cell1 = row.insertCell()
  const cell2 = row.insertCell()

const textNode1 = document.createTextNode(Student.firstName);
const textNode2 = document.createTextNode(Student.location);

cell1.appendChild(textNode1)
cell2.appendChild(textNode2)

}

document.body.appendChild(table)