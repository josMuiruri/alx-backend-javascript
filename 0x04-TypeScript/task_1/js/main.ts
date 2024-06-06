// build a Teacher interface

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}

// Printing teachers
interface printTeacherFunction {
  (firstName: String, lastName: String): string;
}

const printTeacher: printTeacherFunction = (
  firstName: String,
  lastName: String
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Writing a class

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// implements
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
