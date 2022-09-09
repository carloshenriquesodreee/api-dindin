
const modelCourses = require('../model/cursos');

const coursesController = {
    get: (request, response) => {
        response.json(modelCourses.getCourseList())
        response.status(200)
    },

    insert: (request, response) => {
        const {titulo, professor, descricao} = request.body;
        response.setHeader("Access-Control-Allow-Origin", "*");
        const newCourse = modelCourses.insertCourse(titulo,professor,descricao);

        response.status(204).json(newCourse);
    },

    delete: (request, response) => {
        const {id} = request.params;
        const newList = modelCourses.deleteCourse(id);

        response.status(204).json({message:"curso apagado"});
    }
}

module.exports = coursesController;