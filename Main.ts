import {StudentManager} from "./src/StudentManager";
import {Student} from "./src/student";

let studentsManager: StudentManager = new StudentManager();

const student1 = new Student("Men", "c10", 9);
const student2 = new Student("Men2", "c10", 8);
const student3 = new Student("Men2", "c10", 2);

studentsManager.add(student1);
studentsManager.add(student2);
studentsManager.add(student3);

studentsManager.showList();

studentsManager.totalStudent();

studentsManager.findStudentByName("Men")