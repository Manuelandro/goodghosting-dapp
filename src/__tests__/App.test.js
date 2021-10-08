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



test("the app should render the network screen and the join game button", async () => {
    window.ethereum = {
        enable: () => new Promise(resolve => resolve(true)),
        request: () => new Promise(resolve => resolve(true)),
        send: () => new Promise(resolve => resolve(true))
    }
    const store = configureStore()

    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const UserInfo = screen.getByTestId("network-info")
    expect(UserInfo).toBeInTheDocument()

    store.dispatch({
        type: C.SET_PLAYER,
        payload: {
            amountPaid: 0,
            canRejoin: false,
            mostRecentSegmentPaid: null,
            withdrawn: false
        }
    })


    const JoinButton = screen.getByTestId("joinbutt")
    expect(JoinButton).toBeInTheDocument()

})


test("the app should render the game info if the user is set", async () => {
    window.ethereum = {
        enable: () => new Promise(resolve => resolve(true)),
        request: () => new Promise(resolve => resolve(true)),
        send: () => new Promise(resolve => resolve(true))
    }


    const store = configureStore()

    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    store.dispatch({
        type: C.SET_PLAYER,
        payload: {
            addr: '0x90E7F77FD4D30ab70B1d63d83796F682144369b3',
            amountPaid: 10 ** 18,
            canRejoin: false,
            mostRecentSegmentPaid: '0',
            withdrawn: false
        }
    })

    const GameInfo = screen.getByTestId("game-info")
    expect(GameInfo).toBeInTheDocument()


    const addrValue = screen.getByTestId('addr-value')
    expect(addrValue).toHaveTextContent('0x90E7F77FD4D30ab70B1d63d83796F682144369b3')

    const amountValue = screen.getByTestId('amountpaid-value')
    expect(amountValue).toHaveTextContent(String(10**18))

    const canrejoinValue = screen.getByTestId('canrejoin-value')
    expect(canrejoinValue).toHaveTextContent('false')

    const mostrecentValue = screen.getByTestId('mostrecent-value')
    expect(mostrecentValue).toHaveTextContent('0')

    const withdrawnValue = screen.getByTestId('withdrawn-value')
    expect(withdrawnValue).toHaveTextContent('false')

})
