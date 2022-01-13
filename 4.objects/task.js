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
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    }
    
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = marks;
    } else {
    this.marks = this.marks.concat(...marks);
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if(this.marks === undefined){
    return "Оценки отсутствуют"
  }else{
  for(i=0; i<this.marks.length; i++){
    sum += this.marks[i];
  }
  this.average = sum/this.marks.length;
  return this.average;
    }}



Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded=reason;
  }
