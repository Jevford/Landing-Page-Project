// DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';
    
    //12 Hour Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`;

    setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
setBacknGreet = () => {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')"
        greeting.textContent = 'Goood Morning';
        document.body.style.color = 'white';
        document.body.style.backgroundPositionY = '50%';
    } else if(hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')"
        greeting.textContent = 'Goood Afternoon';
    } else {
        document.body.style.backgroundImage = "url('./img/evening.jpg')"
        greeting.textContent = 'Goood Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
getName = (e) => {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name Here]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
setName = (e) => {
    if(e.type === 'keypress') {
        // Checking if "Enter" button is pressed
        if(e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
getFocus = () => {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus Here]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
setFocus = (e) => {
    if(e.type === 'keypress') {
        // Checking if "Enter" button is pressed
        if(e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBacknGreet();
getName();
getFocus();