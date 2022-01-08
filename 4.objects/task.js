function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let yulia = new Student ("Юлия", "женский", 20);
let max = new Student ("Максим", "мужской", 21);


Student.prototype.setSubject = function (subjectName) {
  this.subjectName=subjectName;
}

function subjectName(subject){
this.subject = subject; 
}

Student.prototype.addMark = function (marks) {
  this.marks=marks;
}

function marks(mark){
  if(this.marks === undefined){
    let marks = []; 
    this.marks = marks;
    marks.push(mark);
    } else {
    marks.push(mark);
    }
  return marks;
  }

Student.prototype.exclude = function(exclude) {
  this.exclude=exclude;
  }

function exclude(reason){
  delete Student.marks;
  delete Student.subjectName;
  this.reason=reason;
}