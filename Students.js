// ProgrammingTask5_StudentName_.js

// ===== Model =====
class StudentModel {
  constructor() {
    this.students = []; // store student records
  }

  addStudent(id, name, programme, gpa) {
    if (!id || !name) {
      return "Error: Student ID and Name are required.";
    }
    if (gpa < 0.0 || gpa > 4.0) {
      return "Error: GPA must be between 0.0 and 4.0.";
    }

    const student = { id, name, programme, gpa };
    this.students.push(student);
    return `Success: Student ${name} registered.`;
  }

  getAllStudents() {
    return this.students;
  }
}

// ===== View =====
class StudentView {
  showMessage(message) {
    console.log(message);
  }

  showStudents(students) {
    console.log("=== Registered Students ===");
    students.forEach((student, index) => {
      console.log(
        `${index + 1}. ID: ${student.id}, Name: ${student.name}, Programme: ${student.programme}, GPA: ${student.gpa}`
      );
    });
  }
}

// ===== Controller =====
class StudentController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  registerStudent(id, name, programme, gpa) {
    const result = this.model.addStudent(id, name, programme, gpa);
    this.view.showMessage(result);
  }

  displayStudents() {
    const students = this.model.getAllStudents();
    this.view.showStudents(students);
  }
}

// ===== Main Program =====
const model = new StudentModel();
const view = new StudentView();
const controller = new StudentController(model, view);

// Registering students through Controller
controller.registerStudent("S001", "Lubai", "ICT", 3.4);   // valid
controller.registerStudent("S002", "John", "Business", 2.8); // valid
controller.registerStudent("S003", "Maria", "Science", 3.9); // valid
controller.registerStudent("S004", "Alex", "Arts", 4.5); // invalid GPA

// Display all successfully registered students
controller.displayStudents();