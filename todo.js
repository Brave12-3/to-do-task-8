
let name= prompt("Enter your name");
alert("Aselamualykum"+" "+ name);

console.log("welcome" +" "+ name);

//task object
let tasks = {
   "task1": { name: "clean house", completed: false, id: 1 },
  "task2": { name: "prepare meal", completed: false, id: 2 },
  "task3": { name: "reading quran", completed: true, id: 3 },
  "task4": { name: "finish project", completed: true, id: 4 },
  "task5": { name: "Exercise", completed: false, id: 5 },
  "task6": { name: "Azkar", completed: false, id: 6 },

  
};
 console.log(tasks);



 let task = [{name: "clean house",completed:false,id:1},
   {name: "prepare meal",completed:false,id: 2},
   {name: "reading quran",completed:true,id: 3},
   {name: "finish project",completed:true,id: 4},
   {name: "Exercise",completed:false,id: 5},
   {name: "Azkar",completed:false,id: 6},
]

 for (let i = 0; i < tasks.length; i++) {
  let t = tasks[i];
  if (t.completed) {
    console.log("Task " + t.id + ": " + t.name + " is completed!");
  } else {
    console.log(" Task " + t.id + ": " + t.name + " is not done yet.");
  }
}
function showTasks(tasksArray) {
  for (let i = 0; i < tasksArray.length; i++) {
    let t = tasksArray[i];
    if (t.completed) {
      console.log("Task " + t.id + ": " + t.name + " is completed!");
    } else {
      console.log("Task " + t.id + ": " + t.name + " is not done yet.");
    }
  }
}


showTasks(tasks);
