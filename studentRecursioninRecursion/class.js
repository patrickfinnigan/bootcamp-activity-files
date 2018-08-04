const Students = require("./students");

const Classroom = function(teacherName, roomNum) {
    this.students = [];
    this.Teacher = teacherName;
    this.room = roomNum;

    this.addStudent = function(name, favSubject, gpa) {
        this.students.push(new Students(name, favSubject, gpa));
    }

    this.studentCount = function() {
        return this.students.length;
    }
}

module.