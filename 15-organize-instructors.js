const organizeInstructors = function(instructors) {
  const organizedByCourse = new Object();

  for (let i = 0; i < instructors.length; i++) {
    let course = organizedByCourse.hasOwnProperty(instructors[i].course);
    if (course === false) {
      organizedByCourse[instructors[i].course] = instructors[i].name.split(' ');
    } else if (course === true) {
      for (let y = 0; y < Object.keys(organizedByCourse).length; y++) {
        if (Object.keys(organizedByCourse)[y] === instructors[i].course) {
          organizedByCourse[Object.keys(organizedByCourse)[y]].push(instructors[i].name);
        };
      }
    }
  }
  return organizedByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));