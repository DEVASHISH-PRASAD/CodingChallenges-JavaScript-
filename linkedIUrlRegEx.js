/*
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/
const isValidUrl = (url) => {
  const validLinkedinPattern =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-z0-9]$/;

  return validLinkedinPattern.test(url);
};
const testLinkedInURL1 = "https://www.linkedin.com/in/johndoe123";
const testLinkedInURL2 = "https://www.linkedin.com/in/user_name";
const testLinkedInURL3 = "https://www.linkedin.com/in/invalid!profile";
const testLinkedInURL4 = "http://www.linkedin.com/in/invalidformat";

console.log(
  `Is '${testLinkedInURL1}' a valid url ${
    isValidUrl(testLinkedInURL1) ? "Yes" : "No"
  }`
);
console.log(
  `Is '${testLinkedInURL2}' a valid url ${
    isValidUrl(testLinkedInURL2) ? "Yes" : "No"
  }`
);
console.log(
  `Is '${testLinkedInURL3}' a valid url ${
    isValidUrl(testLinkedInURL3) ? "Yes" : "No"
  }`
);
console.log(
  `Is '${testLinkedInURL4}' a valid url ${
    isValidUrl(testLinkedInURL4) ? "Yes" : "No"
  }`
);
