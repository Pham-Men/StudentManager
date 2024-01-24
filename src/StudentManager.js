"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var ScoreConst_1 = require("./ScoreConst");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this._students = [];
    }
    StudentManager.prototype.showList = function () {
        console.table(this._students);
    };
    StudentManager.prototype.add = function (student) {
        this._students.push(student);
    };
    StudentManager.prototype.totalStudent = function () {
        return this._students.length;
    };
    StudentManager.prototype.findStudentByName = function (name) {
        return this._students.filter(function (student) { return student.name === name; });
    };
    StudentManager.prototype.totalStudentFail = function () {
        var studentsFail = this._students.filter(function (student) { return student.score <= ScoreConst_1.default.MIN_SCORE; });
        return studentsFail.length;
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
