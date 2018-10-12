console.log("yep, I am here.")

// classes are for CSS Styling
// "data attributes" are for JS

// #1 Make some code run
// when i click the button.
// const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]')
const outputImage = document.querySelector('[data-image]')

const fortunes = [
    "You laugh now, wait til you get home.",
    "Fortune not found: Abort, Retry, Ignore?",
    "About time I got out of that cookie.",
    "You will be hungry again in one hour.",
    "Your resemblance to a muppet will prevent the world",
    "Just because you're insanely paranoid doesn't mean you're not being followed by trees.",
    "When you squeeze an orange, orange juice comes out - because that's what's inside.",
    "Run."
];

function createFortuneButton(){
    const theButton = document.createElement('button');
    theButton.textContent = 'Click here for a fortune';
    theButton.setAttribute('data-trigger', '');
    return theButton;
}
function createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('butonContainer');
    // const theButton = createFortuneButton();
    // buttonContainer.appendChild(theButton);
    buttonContainer.appendChild(createFortuneButton);
    
    return buttonContainer;
}

// function hello() {
//     console.log(`Hello addEventListener!`);
// }

const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement2 = document.querySelector('[data-output2]')

const chuckNorris = [
    {
        text: "Chuck Norris threw a grenade and killed 50 people, then it exploded.",url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVA5HcOwfENtLdEEu6rGV9gO9kJ8t8rK8H3yWlYpHBKk7-yHUMA"
    },
    {
        text: "Chuck Norris can rub two pieces of fire together and make wood.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCwdCFHu8oUK5PjRZPRzVvGm_z9pUHmEZ3mzO5jHELFCw4b3bEA"
    },
    {
        text:"Chuck Norris can kill two stones with one bird.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX0pxEAGl70MC_xHftRGFQe8uxKL1XOAwg4VCUSiocmzSjg48"
    },
    {
        text: "Chuck Norris can pick oranges from an apple tree and make the best lemonade youve ever tasted.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-NpljkmmnGIqrRF_LZ7n5_EgTXiQdBtNk6NT9zVM56XIUMPsow"
    },
    {
        text: "Chuck Norris will never have a heart attack... even a heart isnt foolish enough to attack Chuck Norris.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPaMc46VpV-9MAnF5Rh1JmRl9DEiNL3WGn4AT33Hl66Jh5qLzHrQ"
    },
    {
        text: "Chuck Norris can hear sign language.",
        url: "https://www.seabreeze.com.au/Img/Photos/Other/2464154.jpg"
    },
    {
        text: "Chuck Norris makes onions cry.",
        url: "https://i.etsystatic.com/15554723/d/il/ae106b/1570296273/il_340x270.1570296273_63ob.jpg?version=0"
    },
    {
        text: "M.C. Hammer learned the hard way that Chuck Norris can touch this.",
        url: "https://media.gettyimages.com/photos/chuck-norris-poses-with-two-uzis-his-sleeveless-denim-shirt-to-his-picture-id525603410"
    },
    {
        text: "Chuck Norris can speak braille.",
        url: "https://media.gettyimages.com/photos/actor-chuck-norris-poses-for-a-portrait-session-in-january-2003-in-picture-id83457444"
    },
    {
        text: "Chuck refers to himself in the fourth person.",
        url: "https://i.kym-cdn.com/photos/images/newsfeed/000/561/327/1c9.png"
    },
    {
        text: "Jack was nimble, Jack was quick, but Jack still couldn't dodge Chuck Norris' roundhouse kick.",
        url: "https://i.kym-cdn.com/photos/images/masonry/000/648/023/60b.jpg"
    },
    {
        text: "Chuck Norris' dog is trained to pick up his own poop because Chuck Norris will not take shit from anyone.",
        url: "https://i.kym-cdn.com/photos/images/masonry/000/166/876/chuck-norris-thumbs-up.jpg"
    }
];




// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
// triggerElement.addEventListener('click', hello);
triggerElement.addEventListener('click', function () {
    console.log(`Hello AddEventListener!`);
    let index = [Math.floor(Math.random() * fortunes.length)];
    const newFortune = fortunes[index];
    
    
    // index++;
    // if(index > fortunes.length -1){
    //     index = 0;
    // }
    outputElement.textContent = newFortune;
});
// #2 Write some text to the
// page on button click.

triggerElement2.addEventListener('click', function () {
    console.log(`Hello AddEventListener!`);
    let index2 = [Math.floor(Math.random() * chuckNorris.length)];
    const newChuckNorris = chuckNorris[index2].text;
    const newImage = chuckNorris[index2].url;
    index2.url++;
    if(index2 > chuckNorris.length -1){
        index2.url = 0;
    }
    outputElement2.textContent = newChuckNorris;
    outputImage.src = newImage;
});

// #3 Pull text from an array
// of text to write to the
// page.