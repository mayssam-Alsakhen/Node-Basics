
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

const list = [{
  taskName: 'javascript',
  done:true
},
{
  taskName: 'php',
  done:true
},
{
  taskName: 'css',
  done:false
},
{
  taskName: 'HTML',
  done:false
},
];
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }

  else if (text === 'help\n') {
    help();

  }
  else if ((text.slice(0, 3)) === 'add') {
    add(text);
  }
  else if ((text.slice(0, 4)) === 'edit') {
    edit(text);
  }

  else if (text.trim().split(" ")[0] === 'remove') {
    remove(text);
  }
  else if (text.trim().split(" ")[0] === 'check'){
    check(text.trim());
  }
  else if (text.trim().split(" ")[0] === 'uncheck'){
    uncheck(text.trim());
  }

  else if ((text.slice(0, 5)) === 'hello') {
    hello(text.slice(5));
  }

  else if (text === 'list\n') {
    listItems();
  }

  else if (text === 'hello\n') {
    hello();
  }
  else {
    unknownCommand(text);
  }
}

/**
 *say hello 
 *
 * @returns {void}
 */

function hello(x) {
  let arg = x;
  console.log('hello' + arg.replace("\n", "") + "!")

}

/**
 *add a task
 *
 * @returns {void}
 */
function add(y) {

  if (y.slice(3).trim() == "") {
    console.log("error : please add a task")
  }
  else {
    list.push( {taskName : y.slice(3).trim()})
    for (var i = 0; i < list.length; i++) {

      console.log((i + 1) + "-" + list[i].taskName);
    }
  }
}


/**
 *edit
 *
 * @returns {void}
 */


// function edit(m) {
//   let n = m.trim().split(" ")[1];
//   let r = m.trim().split(" ")[2];
//   if (m.slice(4).trim() == "") {
//     console.log("error : please edit a task");
//   }

//   else if (isNaN(parseInt(n))) {

//     list.pop();
//     list.push(n);
//     console.log("you edit the last task in your list, check it please.")
//   }
//     else if(!isNaN(parseInt(n))){
//     // coding[m.split(" ")[1] - 1] = m.split(' ').slice(2).join(' ');
//     const input= m.split(' ');
//     const [edit, index, ...newText] = input;
//     console.log(newText);
//    }
// }

function edit(arg){
  input = arg.trim().split(" ");

  if(input.length === 1) {console.log("error : please edit a task")}
 else if (input.length >= 2 && isNaN(parseInt(input[1]))) {
   console.log("you edit the last task in your list")
  const [command, ...newitem] = input;
  list[list.length -1].taskName =newitem.join(" ")
}

  else if (input.length > 2 && !isNaN(parseInt(input[1]))){
    const [command, index, ...newitem] = input;
    console.log(`'${list[index-1].taskName}' was modified `)
    list[index-1].taskName = newitem.join(" ")
   
  } 
}




/**
 *remove a task
 *
 * @returns {void}
 */

function remove(z) {
  if (z.trim().split(" ")[1]) {
    var a = z.trim().split(" ")[1];
    for (let i = 0; i < list.length; i++) {
      if (i == a - 1) {
        list.splice(i, 1);
        console.log("you removed a task check the list pleas.");

      }
      else if (a > list.length) {
        console.log("your task number does not exist in the list")
      }
    }
  }

  else {
    list.pop();
    console.log("you removed the last task");
  }

}




/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * list
 *
 * @returns {void}
 */

function listItems() {

  for (let i = 0; i < list.length; i++) {
if(list[i].done){
    console.log("[✓]"+(i + 1) + "-" + list[i].taskName);

}
else{
console.log("[ ]"+(i + 1) + "-" + list[i].taskName);
  }}}

/**
 * check a task from the list
 * @returns {void}
 */


 function check(v){
   if(v.trim().slice(5) === ""){
     console.log("no task checked")
   }
   else if (!isNaN (parseInt(v.trim().slice(5)[1]))){
    const [command, index] = (v.trim().slice(5));
    console.log("you checked a task.");
   list[index - 1].done=true;

    
   }

 }



/**
 * uncheck a task from the list
 * @returns {void}
 */


 function uncheck(u){
  if(u.trim().slice(7) === ""){
    console.log("no task checked")
  }
  else if (!isNaN (parseInt(u.trim().slice(7)[1]))){
   const [command, index] = (u.trim().slice(7));
   console.log("you unchecked a task.");
  list[index - 1].done=false;

   
  }

}
 


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * lists all the possible commands'
 *
 * @returns {void}
 */
function help() {
  console.log("'hello x'say hello x!\n'quit' or 'exit' to quit \n'help'  lists all the possible commands\n 'list' will show you your list\n 'add x'will add 'x' to your list\n 'add' will give an error \n 'remove' will remove the last task from your list \n 'remove n' will remove th ;n; task in your list")
}

// The following line starts the application
startApp("Mayssam Alsakhen")
