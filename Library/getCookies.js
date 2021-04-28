/**
 * Get the value of passed cookie name
 * @param  {String} cookieName  name of the cookie
 * @return {String}       value of the cookie
 */
function getCookie (cookieName) {
	let cookieValue = '; ' + document.cookie;
	let cookieValueArr = cookieValue.split(`; ${cookieName}=`);
	if (cookieValueArr.length === 2) {
    return cookieValueArr.pop().split(';').shift();
  }
}
