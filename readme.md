#### Description
A CRUD app that enables users to view photos, add to/remove from favorites, change the per page amount of shown photos. The app should work on the latest 3 browser versions that support es6 modules. Photos are fetched from [picsum.photos](https://picsum.photos/), which in turn serves them from unsplash. The app is still work in progress but it does the job as per the assignment.

[Live version](https://picsum-test-app.vercel.app/)

#### How to run this app locally:

1. Clone the repo,
2. `npm install` the dependencies.
3. `npm run dev` to test the app locally on host `http://127.0.0.1:5173/`

#### Tech:

1. React
2. Scss
3. Axios
4. Framer Motion
5. Postcss-normalize, browserlist, autoprefixer

#### Difficulties encountered:
1. Unsynchronized state between favorite photos, all photos and local storage due to poor app architecture.
2. Erratic behavior with css grid. Will have to tinker with css grid to arrive at the desired result. 
3. Potential benefits can be gained from using RTK for one-place state management, tRPC for better queries.