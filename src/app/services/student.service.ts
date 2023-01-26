import {Injectable} from "@angular/core";
import {Student} from "../models/student.model";
import {Observable, of} from "rxjs";
import {delay, take} from "rxjs/operators";

@Injectable()
export class StudentService {
    private count: number = 8;
    private students: Student[] = [
        { id: "1", firstName: "kate", lastName: "clayton", course: "2", group: "1", averageScore: "3.2" },
        { id: "2", firstName: "emily", lastName: "goddard", course: "1", group: "3", averageScore: "4.5" },
        { id: "3", firstName: "elliot", lastName: "davison", course: "4", group: "2", averageScore: "2.7" },
        { id: "4", firstName: "naomi", lastName: "jenkins", course: "1", group: "3", averageScore: "4.1" },
        { id: "5", firstName: "lucy", lastName: "andrews", course: "1", group: "3", averageScore: "3.3" },
        { id: "6", firstName: "samantha", lastName: "o'sullivan", course: "3", group: "1", averageScore: "3.9" },
        { id: "7", firstName: "tegan", lastName: "Bond", course: "3", group: "1", averageScore: "2.9" },
        { id: "8", firstName: "rhys", lastName: "thorpe", course: "4", group: "2", averageScore: "4.9" },
    ];

    getStudents(): Observable<Student[]> {
        return of(this.students).pipe(
            delay(1500),
            take(1)
        );
    }

    search(token: string): Observable<Student[]> {
        const lowerToken: string = token.toLowerCase();
        const filteredStudents: Student[] = this.students.filter(
                                        (student: Student) => student.firstName.includes(lowerToken) || student.lastName.includes(lowerToken));

        return of(filteredStudents).pipe(
            delay(1500),
            take(1)
        );
    }

    addStudent(student: Student): Observable<boolean> {
        ++this.count;
        student.id = this.count.toString();
        this.students.push(student);

        return of(true).pipe(
            delay(1000)
        );
    }

    deleteStudent(studentId: string): Observable<boolean> {
        this.students = this.students.filter((student: Student) => student.id !== studentId);

        return of(true).pipe(
            delay(1000)
        );
    }
}
