// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const errorMessage = document.getElementById('error-message');
const heart = document.querySelector('.heart');

// Add the .hidden class to the error modal on page load
modal.classList.add('hidden');

// Simulate a server request
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.5; // Simulate success or failure
      if (isSuccess) {
        resolve();
      } else {
        reject('Server error occurred.'); // Simulate error message
      }
    }, 1000);
  });
}

// Function to handle click events on the heart element
function handleHeartClick() {
  if (heart.classList.contains('EMPTY_HEART')) {
    mimicServerCall()
      .then(() => {
        // Server request successful
        heart.classList.remove('EMPTY_HEART');
        heart.classList.add('FULL_HEART', 'activated-heart');
      })
      .catch((error) => {
        // Server request failed
        errorMessage.textContent = error;
        errorModal.classList.remove('hidden');
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  } else {
    // Heart is already full, revert it back to empty
    heart.classList.remove('FULL_HEART', 'activated-heart');
    heart.classList.add('EMPTY_HEART');
  }
}

// Attach the click event listener to the heart element
heart.addEventListener('click', handleHeartClick);




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
