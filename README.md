# We are setting our server

1. We have the MOCK server folder in our root that will be our Backend data server which will serve us the API
2. Do this in the server folder

```
cd server
npm install json-server
npm start
```

JSON server API

```
Resources
http://localhost:9000/videos
http://localhost:9000/tags

Home
http://localhost:9000
```

3. Do this in the root folder

```
npm install json-server
```

# We Have Setup React User Interface

1. We have created `navbar` folder and added `Navbar`, `Search` component in react
2. We have created `tags` folder and added `Tags`, `Tag` component in react
3. We have created `grid` folder and added `VideoGrid`, `VideoGridItem` component in react
4. We have created `ui` folder and added `Pagination` component in react
5. We added `Footer` component in components folder
6. In the `pages/Home` component, we are calling all the above components
7. Image added in the `navbar` from local
8. We added `description` folder with `likeUnlike`, `Player`, `VideoDescription` components
9. Image added in the `likeUnlike` from local
10. We added created `list` folder with `RelatedVideoList`, `RelatedVideoListItem` components
11. We added created `pages` folder with `Home`, `Video` components
12. In the `pages/Video` component, we are calling the video related components

# Setup Routing - react-router-dom

1. Set the react `router` dom
2. `Footer` and `Navbar` component in `App` compoents `router` level
3. Use manual linkup with `Link` in the VideoGridItem to hit the URL and reroute to new page

# We Create videos slice & videos API to fetch data

1. Creating a `videoSlice` with extraReducers and 3 kind of state of an async thunk action
2. fetching dynamic data with `AXIOS` package from the `utils`
3. Update the store

# UI integration and dispatch actions

1. Calling the async `fetchVideos` in the dispatch of `VideosGrid` to get the data from server
2. Updated `VideoGrid`, we are getting the video states when `dispatch` is being called with `useEffect`. We set the upcoming movie records depends on the `loading/error/videos` situation and set the `content` dynamically
3. `VideoGridItem` components is `destructuring` the video object value and all of them has been dynamically updated in the UI component

# Create Tags slice and tags API

1. Created the `tagsSlice` and `tagsAPI` to fetch the data `Asynchronouly`
2. Fetching the server data with `tagsAPI`

# Fetch Tags from BackEnd and then UI Integration

1. `Dispatch` has been added into `Tags` component with `useEffect` to fetch all the tags from server
2. Updated the `Tag` component and it will recieve `title`
3. `tags` recducer added into the `store`

# Slice, API & UI Integration - Part 1

1. We build `videoSlice` and `videoAPI` to create the `Async Thunk` middleware for single video loading independently
2. Added the reducer in the `Redux Store`
3. In Video component, we are `dispatching` the videoId in to the `fetchVideo`(in the videoSlice thunk) and getting the video with several states. We created `conditional UI rendering` depends on the video status.
4. We are passing `title` and `link` to `VideoPlayer` component and updated that component for the dynamic values
5. We are passing `video object` to `VideoDescription` component and updated that component for the dynamic values

# Slice, API & UI Integration - Part 2

1. We build `relatedVideosSlice` and `relatedVideosAPI` to create the `Async Thunk` middleware for related videos loading independently without the video showcasing.
2. Added the `relatedVideosReducer` in the `Redux Store`
3. In RelatedVideoList component, we are `dispatching` the `id` & `tags` in to the `fetchRelatedVideos`(in the relatedVideosSlice thunk) and getting the video with several states. We created `conditional UI rendering` depends on the video status.
4. We are passing `video object` to `RelatedVideoListItem` component and updated that component for the dynamic values

# Filters and Search state level implementation

0. This is a state change commit, the Search/Filtering results will be implemented in next
1. We build `filterSlice` to create the Syncronous Reducers for select/unselect the tags directly for filter purpose
2. Updated the `Tag` component, we are calling the `dispatch` actions depending on the selected status of the tags. If selected we call `tagRemoved`, nor `tagSeclected` action is being called and the styling is also dynamic of the tags upon selected status.
3. We updated the store with a new object `filter`
4. In the `Search` component, we are updating the `search` state of `filter` . We take the input from form and dispatching `searched` actions to update the `search` state.
5. Search component's search button has been fixed and working now with the input

# In this commit, Filters and Search features UI implementation

1. `videosAPI` consume tags and search value to filter out the videos if `filtering/searching` is going on through the `fetchVideos` constant of `videosSlice` reducer
2. `VideoGrid` component now can `dispatch` `tags &s search` values also to get the `filterred/searched` results
3. `search` option workable into the single video page into `Search` component
4. In the single video page, searching will redirect us to the home.

