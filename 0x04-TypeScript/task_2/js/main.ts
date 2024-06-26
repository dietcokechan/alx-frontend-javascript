interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home";
  getCoffeeBreak = (): string => "Getting a coffee break";
  workDirectorTasks = (): string => "Getting director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";
  getCoffeeBreak = (): string => "Cannot have a break";
  workTeacherTasks = (): string => "Getting to work";
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
};
