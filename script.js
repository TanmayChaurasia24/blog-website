// Array of words you want to display in the typing effect
const words = ["thinkers", "dreamers", "influencer","author","writer"];

// Counter to keep track of the current word being typed
let i = 0;

// Variable to store the timer ID for later use
let timer;

// Function to handle the typing effect
function typingEffect() {
    // Split the current word into an array of characters
    let word = words[i].split("");

    // Nested function to loop through and display each character
    var loopTyping = function() {
        // Check if there are still characters in the word array
        if (word.length > 0) {
            // Append the first character to the HTML element with the id 'word'
            document.getElementById('word').innerHTML += word.shift();
        } else {
            // If the word is fully typed, initiate the deleting effect
            deletingEffect();
            return false;
        }
        // Set a timer to call the nested function again after 100 milliseconds
        timer = setTimeout(loopTyping, 200);
    };

    // Call the nested function to start the typing effect
    loopTyping();
}

// Function to handle the deleting effect
function deletingEffect() {
    // Split the current word into an array of characters
    let word = words[i].split("");

    // Nested function to loop through and delete each character
    var loopDeleting = function() {
        // Check if there are still characters in the word array
        if (word.length > 0) {
            // Remove the last character and update the HTML element
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            // If the word is fully deleted, move to the next word or restart the loop
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            // Start the typing effect for the next word
            typingEffect();
            return false;
        }
        // Set a timer to call the nested function again after 200 milliseconds
        timer = setTimeout(loopDeleting, 200);
    };

    // Call the nested function to start the deleting effect
    loopDeleting();
}

// Start the typing effect initially
typingEffect();



function togglebar() {
    const menuIcon = document.querySelector('.below-bar');
    if (window.innerWidth <= 700) {
      menuIcon.style.display = 'block';
    } else {
      menuIcon.style.display = 'none';
    }
  }
  // Initial check on page load
  togglebar();
  // Event listener for window resize
  window.addEventListener('resize', togglebar);

  const writeblog = document.querySelector('.write-blog');
  const writeicon = document.querySelector('.icon');

  writeblog.addEventListener('click',()=>{
    window.location.href = "write.html";
  })

  function submitBlog(){
    window.location.href = "index.html";
  }

  function writesection(){
    window.location.href = "write.html";
  }

  document.querySelector('.signup').addEventListener('click',()=>{
    window.location.href = "account.html";
  })
  document.querySelector('.login').addEventListener('click',()=>{
    window.location.href = "account.html";
  })

  const home = document.querySelector(".house");
  const account = document.querySelector(".user");
  const searchbar = document.querySelector(".icon-search");
  const navbar = document.querySelector(".navbar");
  const iconsAll = document.querySelector(".icons-all");
  
  const moveIconsOnResize = () => {
    if (window.innerWidth < 700) {
      navbar.style.flexDirection = "column-reverse";
      iconsAll.style.display = "flex";
      iconsAll.style.justifyContent = "space-around";
      iconsAll.style.width = "100%";
      iconsAll.style.backgroundColor = "#333";
      iconsAll.style.position = "fixed";
      iconsAll.style.bottom = "0";
      iconsAll.style.padding = "10px 0";
      iconsAll.style.zIndex = "1000";
    } else {
      navbar.style.flexDirection = "row";
      iconsAll.style.display = "none";
    }
  };
  
  home.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
  });
  
  account.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "account.html";
  });
  
  searchbar.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "about.html";
  });
  
  // Initial setup
  moveIconsOnResize();
  
  // Listen for window resize events
  window.addEventListener("resize", moveIconsOnResize);

  function openNav() {
    document.getElementById("nav").classList.remove("hidden");
  }
  
  function closeNav() {
    document.getElementById("nav").classList.add("hidden");
  }