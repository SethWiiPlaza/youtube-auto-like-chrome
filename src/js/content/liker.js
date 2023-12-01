// Function to search for and click the specified element
function clickLikeButton() {
  const likeButtonSelector =
    '#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button > yt-touch-feedback-shape > div';

  // Function to click the like button
  function performClick() {
    const likeButton = document.querySelector(likeButtonSelector);

    if (likeButton) {
      likeButton.click();
      console.log('Like button clicked');
    } else {
      console.log('Like button not found');
    }
  }

  // Wait for 5 seconds before executing the rest of the code
  setTimeout(performClick, 5000); // 5000 milliseconds = 5 seconds

  // Monitor changes in the video title
  let currentTitle = getTitle();

  function getTitle() {
    const titleElement = document.querySelector("#title > h1 > yt-formatted-string");
    return titleElement ? titleElement.textContent : null;
  }

  function checkTitleChange() {
    const newTitle = getTitle();

    if (newTitle !== currentTitle) {
      // Video title has changed, re-run the script
      console.log('Video title has changed, re-running the script...');
      performClick();
      // Update the current title
      currentTitle = newTitle;
    }

    // Check for title changes every 1 second
    setTimeout(checkTitleChange, 1000); // 1000 milliseconds = 1 second
  }

  checkTitleChange();
}

// Call the function to click the like button
clickLikeButton();

