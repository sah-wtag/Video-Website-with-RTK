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

# In this commit, Setup Routing - react-router-dom

1. Set the react `router` dom
2. `Footer` and `Navbar` component in `App` compoents `router` level
3. Use manual linkup with `Link` in the VideoGridItem to hit the URL and reroute to new page
