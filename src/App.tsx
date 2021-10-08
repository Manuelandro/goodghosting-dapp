import 'antd/dist/antd.css';
import React from 'react'
import { Spin } from 'antd';
import goodghostingLogo from './assets/images/goodghosting-logo.svg'

// comps
import InstallMetaMask from './components/InstallMetamask'
import ModalApprove from './components/ModalApprove'
import Network from './components/Network'
import GameInfo from './components/GameInfo';

// hooks
import useGameContract from './hooks/useGameContract'
import useMetaMask from './hooks/useMetaMask';


const App: React.FC = () => {
  useGameContract()
  const [noProvider] = useMetaMask()

  //
  if (noProvider) {
    return (
      <div className="App" data-testid="app">
        <InstallMetaMask />
      </div>
    )
  }

  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <img src={goodghostingLogo} alt="Good Ghosting" />
        <Network />
        <GameInfo />
      </header>
      <ModalApprove />
    </div>
  );
}

export default App;
