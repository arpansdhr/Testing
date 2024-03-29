// Step 1: Gathering information from the website- https://www.limeroad.com/

// UI/UX Bugs
const uiUxBugs = [
    "Bug 1: After liking/unliking a specific product from the product page and then getting back to the category do not update status for like/unlike button",
    "Bug 2: Pressing back to top button scrolls the website to the top page but once pressed, it behaves in a weird manner and the action couldnot be stopped until it reaches the top of the page"
  ];
  
  // Feature Suggestions
  const featureSuggestions = [
    "Feature 1: Liked items category to be added under the profile section drop-down menu",
    "Feature 2: Items quantity control option missing before adding any item to cart"
  ];
  
  // Accessibility Issues
  const accessibilityIssues = [
    "Accessibility Issue 1: Irresponsive website view as most of the item does not show properly in a small screen",
    "Accessibility Issue 2: Like option is missing for some item while seaching for it from the list"
  ];
  
  // Step 2: Creating JSON string with gathered information
  const websiteInfo = {
    "bug": uiUxBugs,
    "feature": featureSuggestions,
    "accessibility": accessibilityIssues
  };
  
  const websiteInfoJSON = JSON.stringify(websiteInfo);
  
  // Step 3: Parsing JSON and printing/loging the first value of each primary key
  const parsedWebsiteInfo = JSON.parse(websiteInfoJSON);
  
  for (const key in parsedWebsiteInfo) {
    if (parsedWebsiteInfo.hasOwnProperty(key)) {
      const value = parsedWebsiteInfo[key][0];
      console.log(`${key}: ${value}`);
    }
  }
  