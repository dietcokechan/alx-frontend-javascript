namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements = (): string => "Here is the list of requirements for Java";

    getAvailableTeacher = (): string => {
      if (this.teacher.experienceTeachingJava === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    };
  }
}
