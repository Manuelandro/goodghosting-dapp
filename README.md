# GoodGhosting FE Challange

Hi there, this is my solution for the challange

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the unit test

### `yarn cy`

Launches the E2E tests

## Details

`GENERAL`
For the sake of semplicity I bootstrapped the application with create-react-app. Then I added
typescript (just typed the surface, we can do a lot more), redux and web3.
The architecture is very simple in this light app, i put in different location the components,
the redux flow and the hooks which are responsible for the logi and the side effects (I do prefer
to have different small hooks that talks to each other rather than less giant files).

`CYPRESS`
Handle browers extentions in a headless environment was a bit tricky; my solution is heavly
inspired by Synpress. The whole idea is to download and unzip the metamask package locally,
and run it in a new window as another test pages.

Please remember that because sometimes blockchain process transactions slower, I hade to put different "wait" tasks in order to be sure that the UI is updated accordly to what we expect from the test. So don't be hurry, it may take a while :)
