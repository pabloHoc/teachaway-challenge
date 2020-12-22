# TeachAway Frontend Challenge

## How to run this project

- Clone the project: `https://github.com/pabloHoc/teachaway-challenge`
- Move to the project's root folder: `cd teachway-challenge`
- Install dependencies: `npm install`
- Start the app: `npm start`
- You can now view the project running in the browser: `http://localhost:3000`

## Approach

Unfortunately, I didn't have a lot of time for this challenge, so I decided to implement only the most basic functionality and styles. Some decisions I've taken to accomplish it are the following:

- For simplicity's sake, the app shows only album images. Otherwise, I'd have to do some conditional checks and handle two cases for each feature, which would have added more complexity and took longer to implement.
- Use of CSS modules. The app's appearance is too basic and doesn't need dynamic styles nor complex components with multiple variants; two things CSS-in-JS handles better.
- No state management library. The app is simple enough to rely on React's state and prop drilling, so I didn't use a more complex solution (e.g., Redux).
- Non-reusable components. The components used aren't flexible enough to be reused.

There's also a lot of room for improvements. Some things I'd like to have done if I'd have more time are (in no preferred order):

- **Testing**.
- **Error handling:** I didn't have time to add an Error Boundary component, and currently, if there is some problem (especially with an API request), the app explodes.
- **Performance:** I would analyze if there are components with unnecessary re-renders and function calls or API requests that could be cached. Performance could also be improved by prefetching some requests (next page and details) and requesting smaller images.
- **PropTypes:** (or Typescript depending on the project size): Some components require props with some specific data structure. Typing them would prevent a lot of bugs and serve as component documentation.
- **Fix bugs:**
  Steps to reproduce:
  Choose some filter combination with unique options (e.g., user + rising)
  Change to another combination that doesn't include one of the previous ones (e.g., viral, doesn't have a "rising" option)
  Check the network tab. The request sent has those parameters nonetheless (e.g., viral + rising).
  Since the API returns a response with the default option, and the dropdown also changes to the default option (e.g., viral + popular), the images rendered match the current filters. This implementation is faulty (relies on proper select's options ordering) and needs to be improved.
- **Better UX:** The user experience could be improved by a lot. Some things that could be added:
  - Icons
  - Keep scroll position
  - Infinite Scroll
  - Skeleton components
  - Loaders
  - Errors messages
- **Better Styling:** The app right now is visually rough and needs a lot of care.
- **Better theming:** In a bigger application, I'd use a proper theming system and a UI component library.
- **Better a11y:** Accessibility wasn't taken into account, and needs to be addressed. I would check for accessibility issues (color contrast, keyboard navigation, etc.) and proper HTML semantics.
- **Add a 404 page**.
- **Responsiveness:** I would ensure that the design works in different resolutions.
- **Using environment variables:** The Client API key is hardcoded. I would use env variables instead.
