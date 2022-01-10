function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let yulia = new Student ("Юлия", "женский", 20);
let max = new Student ("Максим", "мужской", 21);


Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    let marks = []; 
    this.marks = marks;
    marks.push(mark);
    this.marks=marks;
    } else {
    this.marks.push(mark);
    }
    
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
    let marks = []; 
    this.marks = marks;
    marks.push(...mark);
    this.marks=marks;
    } else {
    this.marks.push(...mark);
    }

}

Student.prototype.getAverage = function () {
  let sum = 0;
  for(i=0; i<this.marks.length; i++){
    sum += this.marks[i];
  }
  this.average = sum/this.marks.length;
  return this.average;
    }



Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded=reason;
  }
