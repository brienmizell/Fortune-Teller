console.log("yep, I am here.")

// classes are for CSS Styling
// "data attributes" are for JS

// #1 Make some code run
// when i click the button.
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]')

// function hello() {
//     console.log(`Hello addEventListener!`);
// }

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
// triggerElement.addEventListener('click', hello);
triggerElement.addEventListener('click', function () {
    console.log(`Hello AddEventListener!`);
    outputElement.textContent = `la la la la la lalalalala`;
})
// #2 Write some text to the
// page on button click.



// #3 Pull text from an array
// of text to write to the
// page.