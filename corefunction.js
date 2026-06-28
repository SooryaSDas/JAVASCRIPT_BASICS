// function html (){
//     console.log("learn html");
// }

// function css (){
//     console.log("learn css");
// }

// html();
// css();


// callback function - a function pass as an argument to another function
function html (fn){
    console.log("learn html");
    fn();
}

function css (){
    console.log("learn css");
}

html(css);
