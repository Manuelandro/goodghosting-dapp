import React from 'react'
import goodghostingLogo from '../assets/images/goodghosting-logo.svg'
import MetamaskLogo from '../assets/images/metamask-logo.svg'

const InstallMetaMask: React.FC = () => {
    return (
      <>
      <header className="App-header">
        <img src={goodghostingLogo} alt="Good Ghosting" />
         <p data-testid="message">In orderd to partecipate to our game you have to install MetaMask or activate it on this page</p>
          <img alt="Metamask" src={MetamaskLogo} width="200" data-testid="meta-logo"/>
         <p>
          <a href="https://metamask.io/" target="_blank">Install Metamask</a>
        </p>
      </header>
    </>


    )
}

export default InstallMetaMask