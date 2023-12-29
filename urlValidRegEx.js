/*
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/
const isValidUrl = (url) => {
  const urlPattern = /^(http|https):\/\/[\w\d-]+(\.[\w]+)+$/;
  return urlPattern.test(url);
};
const testUrl1 = "https://subdomain.examp.org";
const testUrl2 = "http://www.ex.com";
const testUrl3 = "ftp://notvalidurl.com";
console.log(
  `Is "${testUrl1}" a Valid URL? ${isValidUrl(testUrl1) ? "Yes" : "No"}`
);
console.log(
  `Is "${testUrl2}" a Valid URL? ${isValidUrl(testUrl2) ? "Yes" : "No"}`
);
console.log(
  `Is "${testUrl3}" a Valid URL? ${isValidUrl(testUrl3) ? "Yes" : "No"}`
);
