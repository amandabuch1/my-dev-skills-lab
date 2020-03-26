// HOW TO SEE IF JQUERY IS CONNECTED

// console.log($)
// THIS SHOULD HAVE APPEARED 
// ƒ (a,b){return new r.fn.init(a,b)}



// When the user clicks on the button add skill
// VANILLA JS: document.querySelector('button').addEventListener(click, ())
$('button').on('click', function () {
    
    // DOUBLE CHECK WHAT YOUR CLICKING IS WHAT YOU WANTED
    // console.log("It worked!");
    // get the input from the user and store it in a variable
    let element = $('input').val();
    // make a div element and add the array content to the div
    let ul = `<li id="lineAdded" >${element}<button class="btn btn-xs btn-danger">remove</button></li>`
    
    // append the div to the div #mySkills
    $('#mySkills').append(ul);
    // CLear the input content
    $('input').val('');

    $('#mySkills').on('click','button', function() {
        // CONSOLE LOGGING THE CLICK OF THE RESET BUTTONS
        console.log(this);

        // REMOVES BUTTON
        $(this).closest('li').remove();
    })
})

// HOW TO SEE IF JQUERY IS CONNECTED

// console.log($)
// // THIS SHOULD HAVE APPEARED 
// // ƒ (a,b){return new r.fn.init(a,b)}



// // When the user clicks on the button add skill
// // VANILLA JS: document.querySelector('button').addEventListener(click, ())
// $('button').on('click', function () {
    
//     // DOUBLE CHECK WHAT YOUR CLICKING IS WHAT YOU WANTED
//     // console.log("It worked!");
//     // get the input from the user and store it in a variable
//     let element = $('input').val();
//     // make a div element and add the array content to the div
//     const $div = $('<div>').text(element);
//     console.log($div);
//     // append the div to the div #mySkills
//     $('#mySkills').append($div);
//     // CLear the input content
//     $('input').val('');
// })

// // HOW TO SEE IF JQUERY IS CONNECTED

// console.log($)
// // THIS SHOULD HAVE APPEARED 
// // ƒ (a,b){return new r.fn.init(a,b)}



// // When the user clicks on the button add skill
// // VANILLA JS: document.querySelector('button').addEventListener(click, ())
// $('button').on('click', function () {
    
//     // DOUBLE CHECK WHAT YOUR CLICKING IS WHAT YOU WANTED
//     // console.log("It worked!");
//     // get the input from the user and store it in a variable
//     let element = $('input').val();
//     // make a div element and add the array content to the div
//     const $div = $('<div>').text(element);
//     console.log($div);
//     // append the div to the div #mySkills
//     $('#mySkills').append($div);
//     // CLear the input content
//     $('input').val('');
// })



// WHAT WE DID UNTIL THE end
// // When the user clicks on the button add skill
// // VANILLA JS: document.querySelector('button').addEventListener(click, ())
// $('button').on('click', function () {
    
//     // DOUBLE CHECK WHAT YOUR CLICKING IS WHAT YOU WANTED
//     // console.log("It worked!");
//     // get the input from the user and store it in a variable
//     let element = $('input').val();
//     // make a div element and add the array content to the div
//     const $div = $('<div>').text(element);
//     // append the div to the div #mySkills
//     $('#mySkills').append($div);
//     // CLear the input content
//     $('input').val('');
// })


// 1st round with a array we made not from an input
// // Create an array of skills to storw our test data
// const testData = ['arrow functions', 'class constructors', 'objects'];
// // When the user clicks on the button add skill
// // VANILLA JS: document.querySelector('button').addEventListener(click, ())
// $('button').on('click', function(){
//     console.log("It worked")

//     // pop off the last array element stor in variable
//     let element =testData.pop();
//     console.log(element);
//     // make a div element and add array conntent to the div
//     // CREATE AN ELEMENT OU NEED TO USE<> AROUND WHAT YOU WANT TO CREATE
//     const $div = $('<div>').text(element);
//     // .append the div to the div with #mySkills
//     $("#mySkills").append($div);

// })