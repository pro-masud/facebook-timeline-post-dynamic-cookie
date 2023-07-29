
const createAlert = (msg, type = 'danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"></button></p>`
}


/**
 * Send Data to LS
 */

const sendDataLS = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data));

}

/**
 * Get Data to LS
 */


const getDataLS = (key) =>{
  if(localStorage.getItem(key)){
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}


/**
 * Time ago
 */
const  timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval >= 1) {
      return interval + (interval === 1 ? ' year ago' : ' years ago');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + (interval === 1 ? ' month ago' : ' months ago');
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + (interval === 1 ? ' day ago' : ' days ago');
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + (interval === 1 ? ' hour ago' : ' hours ago');
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + (interval === 1 ? ' minute ago' : ' minutes ago');
    }
    return Math.floor(seconds) + (seconds === 1 ? ' second ago' : ' seconds ago');
  }
  
  // Usage example:
  const date = '2023-07-25T12:34:56'; // Replace this with your desired date or timestamp
  const timeAgoString = timeAgo(date);
  console.log(timeAgoString);
  