const selectors = {
  likeButton: [
    '#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) yt-icon-button',
    '#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) button',
    '#segmented-like-button button',
  ],
  dislikeButton: [
    '#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) yt-icon-button',
    '#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) button',
    '#segmented-dislike-button button',
  ],
  subscribeButton: [
    '#subscribe-button tp-yt-paper-button',
    '#subscribe-button button',
  ],
  videoTitle: '#title > h1 > yt-formatted-string',
};

export default class Liker {
  // ... (rest of the existing code)

  /**
   * Detects when the video title has changed
   */
  waitForTitleChange() {
    this.log('waiting for title change...');

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const newTitle = document.querySelector(selectors.videoTitle)?.textContent;
        if (newTitle && newTitle !== this.cache.videoTitle) {
          this.log('...title changed');
          this.cache.videoTitle = newTitle;
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
  }

  // ... (rest of the existing code)

  /**
   * Starts the liking magic.
   * The liker won't do anything unless this method is called.
   */
  async start() {
    this.log('status: running');
    this.status = 'running';
    this.cache = {};

    // ... (existing code)

    switch (this.options.like_when) {
      case 'timed':
        // ... (existing code)
        break;

      case 'percent':
        // ... (existing code)
        break;

      case 'titleChange':
        await this.waitForTitleChange();
        this.clickLike();
        break;

      default:
        this.clickLike();
    }
  }
}
