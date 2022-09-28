let input = prompt("What do you what to do?");
const todos = ["dont give up", "please dont give up", "Attempt it again"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("********");
    for (let i = 0; i < todos.length; i++) {
    console.log(`${i}: ${todos[i]}`);
    }
    console.log("********");
  } else if (input === "new") {
    const new_todos = prompt("What is the next to-do?");
    todos.push(new_todos);
    console.log(`${new_todos} added to List`);
  } else {
    input === "delete";
  }
  {
    const index = parseInt(prompt("enter an index to delete"));
    if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Ok deleted ${deleted[0]}`);
    } else {
        console.log('Unknown Index');
    }

  }
  input = prompt("What do you what to do?");
}
console.log("OK QUIT THE APP");
