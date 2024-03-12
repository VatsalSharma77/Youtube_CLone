# Youtube_CLone
Welcome to my YouTube clone project! This project aims to replicate the basic functionality of YouTube, with a focus on styling using Tailwind CSS and utilizing the YouTube Data API for fetching video data. Below is a guide to help you understand the project structure and its components.

Project Structure-
- src
  - components
    - Feed
    - Header
    - LeftNav
    - LeftNavMenuItem
    - SearchResult
    - SearchResultVideoCard
    - SuggestionVideoCard
    - VideoCard
    - VideoDetails
  - context
    - contextApi.js
  - images
  - shared
    - Loader.js
    - VideoLength.js
  - utils
    - api.js
    - constants.js
Components
Feed: Main component for displaying the video feed.

Header: Component for the application header.

LeftNav: Component for the left navigation menu.

MenuItem: Component for individual menu items in the left navigation.

SearchResult: Component for displaying search results.

SearchResultVideoCard: Video card component specifically designed for search results.

SuggestionVideoCard: Video card component for suggested videos.

VideoCard: Generic video card component.

VideoDetails: Component for displaying detailed information about a video.

Context
DataContext.js: Context provider for managing application state, including fetching and storing video data.
Images
Directory for storing images used in the project.
Shared
Loader.js: Component for displaying a loading state while fetching data.

VideoLength.js: Component for displaying the length of a video.

Utils
api.js: Utility file for making API requests using Axios, with YouTube API key and predefined parameters.

constants.js: Utility file for storing constants, such as an array of video categories with icons.

