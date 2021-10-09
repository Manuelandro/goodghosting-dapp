# GoodGhosting FE

Hi there, this is my solution for the dApp

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the unit test

### `yarn cy`

Launches the E2E tests (requires the app running)
Please read the CYPRESS section

## Details

`GENERAL`
For the sake of simplicity I bootstrapped the application with create-react-app. Then I added
typescript (just typed the surface, we can do a lot more), redux with immer for immutability and web3js.
The architecture is very simple in this light app, i put in different location the components,
the redux flow and the hooks which are responsible for the logic and the side effects (I prefer
to have different small hooks that talk to each other rather than few giant unreadable files).

`CYPRESS`
Handle browers extentions in a headless environment was a bit tricky; my solution is heavly
inspired by [Synpress](https://github.com/Synthetixio/synpress). The whole idea is to download and unzip the metamask package locally,
and run it in a new window as another test pages.
For the motivation upon, test are intendend to run one time (ideally in a pipeline). If you want to re-run the tests you should stop it and run again the yarn cy command.
**Please remember** that because sometimes blockchain transactions can be very slow, I hade to put **22 seconds** wait after every transaction confirmation to be sure that the UI is updated accordly to what we expect from the test. So don't hurry, it may take a while :)

`CASES COVERED`

- User does not have metamask or is inactive to the page
- User never joined the game
- User joined the game in the past and can rejoin
- User accept the dai contract
- User accept the transaction to join the game
- User early withdraw from the game
