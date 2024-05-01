interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "USA",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 24,
  location: "Canada",
};

const studentsList: Student[] = [student1, student2];

const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");
const thead = document.createElement("thead");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th1.innerText = "First Name";
th2.innerText = "Location";

thead.appendChild(th1);
thead.appendChild(th2);
table.appendChild(thead);

studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.innerText = student.firstName;
  td2.innerText = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
});

body.appendChild(table);
