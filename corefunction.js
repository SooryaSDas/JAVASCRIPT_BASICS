// function html (){
//     console.log("learn html");
// }

// function css (){
//     console.log("learn css");
// }

// html();
// css();
// output
// learn html
// learn css
// ------------------------------------------------------------------------------
// callback function - a function pass as an argument to another function
// function html (fn){
//     console.log("learn html");
//     fn();
// }

// function css (){
//     console.log("learn css");
// }

// html(css);
// output
// learn html
// learn css

// ------------------------------------------------------------------------------

function html(fn){
    console.log("learn html");
    setTimeout(()=>{
        console.log("end html");
        fn();
    }, 1000);
}

function css (){
    console.log("learn css");
}

html(css);

// output
// learn html
// end html
// learn css
// with call back function we can control the flow of execution of the program. previous time the settimeout function was not controlled and it was executed after the css function but now we can control the flow of execution of the program.