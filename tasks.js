
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

let coding = [
  'javascript',
  'php',
  'css',
  'HTML'
]

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
  if (text === 'quit\n'|| text ==='exit\n') {
    quit();
  }

   else if(text ==='help\n') {
     help();
     
   }
   else if ((text.slice(0, 3)) ==='add'){
      add(text);
   }
   
   else if(text.trim().split(" ")[0] === 'remove'){
    remove(text);
  }

else if((text.slice(0,5))==='hello'){
  hello(text.slice(5));
}

else if (text === 'list\n'){
  list();
}


  else if(text === 'hello\n'){
    hello();
  }
  else{
    unknownCommand(text);
  }
}

/**
 *say hello 
 *
 * @returns {void}
 */

function hello(x){
  let arg = x;
  console.log('hello' + arg.replace ("\n","") + "!")
  
}

/**
 *add a task
 *
 * @returns {void}
 */
function add (y){

    if (y.slice(3).trim() == ""){
      console.log("error : pleas add a task")
    }
    else{
      coding.push(y.slice(3).trim())
      for (var i = 0 ; i<coding.length; i++ ){
        
        console.log((i+1) + "-" + coding[i]);
      }
    }
  }

/**
 *remove a task
 *
 * @returns {void}
 */

 function remove(z){
  if(z.trim().split(" ")[1]){
   var a = z.trim().split(" ")[1];
   for(let i=0 ; i<coding.length ;i++){
     if(i == a-1){
       coding.splice(i,1);
       console.log("you removed a task check the list pleas.");
       
     }
   }
  }
  else{
    coding.pop();
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * list
 *
 * @returns {void}
 */
 
function  list (){

for (var i = 0 ; i<coding.length; i++ ){

  console.log((i+1) + "-" + coding[i]);


}


}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * lists all the possible commands'
 *
 * @returns {void}
 */
function help(){
 console.log("'hello x'say hello x!\n'quit' or 'exit' to quit \n'help'  lists all the possible commands\n 'list' will show you your list\n 'add x'will add 'x' to your list\n 'add' will give an error \n 'remove' will remove the last task from your list \n 'remove n' will remove th ;n; task in your list")
}

// The following line starts the application
startApp("Mayssam Alsakhen")
