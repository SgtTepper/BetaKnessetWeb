# Updating Election Data
### Setup Environment
1) Install a react IDE (We use WebStorm)
2) Clone this Repo
3) Open a new branch
4) install [node-js](https://nodejs.org/en/)
5) install yarn: `brew install yarn`
6) build environment: `yarn build`

### Download Votes
1) Clone [BetaKnessetData repo](https://github.com/SgtTepper/BetaKnessetData)
2) Install DBeaver
3) Connect to DB
------

### Choose interesting votes
1) hand pick interesting votes. Use the following queries to help
    a)
2) Fill by hand the table `Votes_Interesting`

### Update Votes Tables
1) In `BetaKnessetWeb/SQL_Queries` you can find the list of queries that need to be run * The order of the queries below is important!*
2) See what parties don't have a logo using `1_check_parties_without_logo.sql` and fill by hand a link to the party logo in Votes_PartyLogo
3) Create release candidate tables (rc)
    1) run `2_create_Votes_Person2Code.sql` to create release candidate of Votes_Person2Code
    2) update the following columns by hand based on the current party list: Faction, PlaceInList, faction_picture
    3) run `3_create_Votes_People_in_knesset.sql`
4) Rename current `Votes_...` tables to `old_Votes...`
5) Rename `rc_Votes...` to `Votes_...` and check that everything works.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
