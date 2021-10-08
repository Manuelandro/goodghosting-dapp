import { expect, test, afterEach } from '@jest/globals'
import { render, cleanup, screen } from '@testing-library/react'
import InstallMetamask from '../components/InstallMetamask'


afterEach(cleanup)


test("the component should render a message to install MetaMask", async () => {
    render(<InstallMetamask />)

    expect(screen.getByText("In orderd to partecipate to our game you have to install MetaMask or activate it on this page"))
        .toBeInTheDocument()
})


test("the component should render the MetaMask Logo", async () => {
    render(<InstallMetamask />)

    const metalogo = screen.getByTestId("meta-logo")
    expect(metalogo.src).toContain("metamask-logo.svg")
})

