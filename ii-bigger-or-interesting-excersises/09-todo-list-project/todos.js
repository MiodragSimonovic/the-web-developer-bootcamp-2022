setTimeout(function () {

    let input = prompt("What would you like to do?").toLowerCase().trim();

    const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

    while (input !== "quit" && input !== 'q') {
        if (input === "list" || input === 'l') {
            console.log("***********************************");
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i+1}: ${todos[i]}`);
            }
            console.log("***********************************");
        } else if (input === "new" || input === 'n') {
            const newTodo = prompt("OK, what is the new todo?"); //"const" because it is only created in "else if" and after that it stop to exist, when we loop again, new const variable is created
            todos.push(newTodo);
            console.log(`"${newTodo}" added to the list`);
        } else if (input === "delete" || input === 'd') {
            let index = parseInt(prompt("OK, enter an index to delete:"));
            while (!index) {
                index = parseInt(prompt("Wrong input! Enter a number that is on the current Todo list!"));                
            } 
            console.log(`Todo: "${index}: ${todos[index-1]}" is deleted.`);
            todos.splice(index - 1, 1);           
        } else {
            input = alert("Wrong input, click OK then enter a valid input.");
        }
        input = prompt("What would you like to do?").toLowerCase().trim();
    }

    console.log("You quit the app.");
    alert("You quit the app.");

}, 200)
