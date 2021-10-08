import { expect, test, afterEach } from '@jest/globals'
import { render, cleanup, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import * as C from '../store/constants'
import ModalApprove from '../components/ModalApprove'


afterEach(cleanup)


test("do not display the approval modal if user didn't join the fame", async () => {
    const store = configureStore()
    render(
        <Provider store={store}>
            <ModalApprove />
        </Provider>
    )

    let modal
    try {
        modal = await screen.findByTestId("modal-approve")
    } catch (err) {
        //
    }
    expect(modal).toBeUndefined()
})

test("display the approval modal is try to join the game", async () => {
    const store = configureStore()

    render(
        <Provider store={store}>
            <ModalApprove />
        </Provider>
    )

    store.dispatch({ type: C.SET_APPROVING, payload: true })


    await new Promise((r) => setTimeout(r, 2000));

    let modal
    try {
        modal = await screen.findByTestId("modal-approve")
    } catch (err) {
        console.log(err)
    }

    expect(modal.tagName).toBe('DIV')

})