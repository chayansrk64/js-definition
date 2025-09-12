/**
 *  ============== What is JavaScript? ================
 * 
 *  JavaScript is highly abstructed programming language
 * ______________________________________________
 *  High Abstruction
 * ## An Abstruction is a way of: 
 *  # hiding the implementation details
 *  # Showing only the functionality to the users
 * ___________________________________
 * ## High abstraction in JavaScript
 * # We don't have to handle resource management and memory allocation.
 * # We don't have to hanlde garbage collection.
 * # Reduces details so that developers can focus on logic better.
 * # Improves understandability as well as maintainability of the code.
 * __________________________________
 * ## Garbage Collection
 * * JavaScript automatically collects unused data.
 * * Frees the memory with the help of an algorithm called 'Mark-and-sweep'.
 * * The garbage collector goes through the roots, marking (remembering) them on its way.
 * * It then moves on to the references and marks them as well
 * * The cycle continues until the garbage collector visits all the roots and references.
 * * The garbage collector removes all the objects, except the marked ones.
 * ________________________________
 *  ## JavaScript is a (JIT) compiled Language
 *  # Just-In-Time (JIT):
 *  * JavaScript is not a purely interpreted language.
 *  * Modern JavaScript is JIT compiled.
 *  * The JIT compiler converts the entire code into machine code and executes it immediately.
 * __________________________________
 *  ## JavaScript is a multi-paradign programming language
 *  # Multi-Paradign:
 * A code structure that determines the style or way of programming
 * 
 * 1. Procedural Programming
 *    * Involves writing down instructions
 *    * Tells the computer what is should do step-by-step
 * 2. Object Oriented Programming
 *    * Modeling a system as a collection of objects
 *    * Objects contain both functions (or Methods) and data
 * 3. Functional Programming
 *    * An approach to software developement that uses pure functions
 *    * To create maintainable software
 * ____________________________________________
 *  ## JavaScript is a proto-typed based programming language
 *      #Proto-typed based
 * 
 *      * In JavaScript, everyting (function, array, objects) is object except the primitive data
 *      * a protorypical object is an object used as a template from which to get the initial properties for a new object
 *      * Proto-type is a blueprint
 * ____________________________________________
 *  ##  JavaScript is dynamically typed
 *      * When you declare a variable, you do not need to specify what type this variable is.
 *      * JavaScript engine infers what type this variable is based on the value assigned to at run time.
 *      * As javaScript determines the type at runtime we can re-declare the type
 *   
 * 
 *  ===========  SUMMARY  =============
 * 
 * JavaScript is powerful and flexible: it’s high-level, dynamically typed, prototype-based, garbage-collected, JIT-compiled, and supports multiple paradigms.
 * 
 * __________________________________
 * 
 * ## Execution Context
 * * An execution context is an environment
 * * Inside the execution context a piece of JavaScript code gets executed.
 * * Variables, parameters and other information related to the peice of code get stored in the execution context
 * 
 *  # There are two kinds of execution context
 *      1. Global Execution Context (GEC)
 *      2. Funcion Execution Context (FEC)
 * 
 *   # Global Executio Context:
 *      Whenever the JavaScript engine receives a script file, it first creates a default Execution Context know as the Globl Execution 'Context (GEC)
 *      * GEC is the base/default Exxecution Context
 *      * all JavaScript code that is not inside of a function gets executed.
 *      * For every JavaScript file, there can only be one GEC
 *    
 *   # Function Execution Context
 *      Whenever a function is called, the JavaScript engine creates a different type fo
 *      Execution Context know as a Function Execution Context (FEC) 
 *      * Every time a function is called, a new execution context is created for that function.
 *      * Each function has its own execution context.
 *      * Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.
 * 
 * __________________________________________________
 *  ## Creation phase
 *  # Creation phase is the phase in which the JS engine has called a function, but its execution has not started.
 *  * JS engine is in the compilation pahse
 *  * It just scans over the function code to compile the code
 *  * It doesn't execute any code.
 * 
 * ________________________
 *  ## Execution phase
 *  # During the execution phase, the JavaScript engine executes the code line by line
 *  * Assigns the values to variables, and
 *  * Executes the function calls.
 * 
 * _________________________
 *  ## Call stack
 *  * The call stack is used by JavaScript to keep track of multiple function calls
 *  * In order to manage the execution contexts, the JavaScript engine uses a call stack.
 * 
 * ______________________
 *    ## Single Threaded 
 *    * Single-threaded means only one statement is executed at a time.
 *    * JavaScript only has one call stack.
 *    * JavaScript runs code line by line.
 *    * Must finish executing a piece of code before moving to the next.
 *  
 * _______________________________________________________________
 * 
 *       ======= Synchronous and Asynchronous =========
 * 
 *  ## What do you mean by Synchronous?
 *  * You'll see that until the first image is loaded completely,
 *  * The second image doesn't start loading.
 * 
 *  ## What do you mean by Asynchronous?
 *  * All the images are loading at their own pace.
 *  * None of them is waiting for any of the others.
 * 
 * _____________________________________________________
 *      Async / Await
 *   # "async/await" is a special syntax to work with promises in a more comfortable way
 *   # It's surprisingly easy to understand and use.
 *   # The await keyword can only be used inside an async function.
 *   # The await keyword makes the function pause the execution and
 *   # wait for a resolved promise before it continues
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
