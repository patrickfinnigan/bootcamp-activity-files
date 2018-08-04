const Classroom = require("./class")
const firstClass = new Classroom ("Mrs. Harris, 201");
firstClass.addStudent("Jacob", "coding", 3.45);
firstClass.addStudent("Marie", "Econ", 3.89);

console.log("Students in class: " firstClass.studentCount());
console.log('students', firstClass.students);
console.log("firstClass", firstClass)
console.log("")