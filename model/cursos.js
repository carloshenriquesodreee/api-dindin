const courseList = require('../database/courses.json');
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

function getCourseList() {
  return courseList;
}
function insertCourse (titulo, professor, descricao) {
    const newCourse = {
        id: randomUUID(),
        titulo : titulo,
        professor : professor,
        descricao : descricao
    };

    courseList.push(newCourse);

    courseFile()
    return newCourse;
}

function deleteCourse(id) {
    const courseListIndex = courseList.findIndex((course) =>
    course,id === id);
    courseList.splice(courseListIndex, 1);
}

function courseFile() {
    fs.writeFileSync(
        path.resolve("database", "courses.json"),
        JSON.stringify(courseList)
      );
}

module.exports = { getCourseList, insertCourse, deleteCourse};