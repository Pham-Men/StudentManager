import {Student} from "./student";
import ScoreConst from "./ScoreConst";

export class StudentManager {
    private readonly _students: Array<Student>;

    constructor() {
        this._students = []
    }

    showList() {
        console.table(this._students);
    }

    add(student: Student) {
        this._students.push(student);
    }

    totalStudent(): number {
        return this._students.length;
    }

    findStudentByName (name: string): Student[] {
        return this._students.filter(student => student.name === name);
    }

    totalStudentFail(): number {
        const studentsFail = this._students.filter(student => student.score <= ScoreConst.MIN_SCORE);
        return studentsFail.length;
    }

}