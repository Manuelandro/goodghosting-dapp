import { expect, test, afterEach } from '@jest/globals'
import { render, cleanup, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import * as C from '../store/constants'
import App from '../App'


afterEach(cleanup)


test("the Application should render properly", async () => {
    const store = configureStore()
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const AppWrapper = screen.getByTestId("app")
    expect(AppWrapper.tagName).toBe("DIV")

})


test("the app should render the Install Metamask Screen", async () => {
    const store = configureStore()
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const MetamaskLogo = screen.getByTestId("meta-logo")
    expect(MetamaskLogo).toBeInTheDocument()

})



test("the app should render the info screen", async () => {
    window.ethereum = {
        enable: () => new Promise(resolve => resolve(true))
    }
    const store = configureStore()

    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const pp = screen.getByTestId("app")
    console.log(store.getState())
    const UserInfo = screen.getByTestId("user-info")
    expect(UserInfo).toBeInTheDocument()

})

