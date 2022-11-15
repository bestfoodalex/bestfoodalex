import React, { useRef } from 'react';
import { Grommet } from 'grommet';
import { Web3Modal } from '@web3modal/react'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import Landing from './components/Landing';
import About from './components/About';
import Web from './components/Web';
import Influence from './components/Influence';
import CopyrightFooter from './components/CopyrightFooter';
import colors from './theme/colors';
import { PageRefType, ScrollToRefFunc } from './utils/pageRefs';

const theme = {
  global: {
    colors: {
      ...colors
    },
    font: {
      family: 'Lato',
      size: '18px',
      height: '20px'
    }
  }
};

const App = () => {
  const pageRefs: PageRefType = {
    topRef: useRef(),
    aboutRef: useRef(),
    webRef: useRef(),
    influenceRef: useRef()
  };

  const scrollToRef: ScrollToRefFunc = (currRef: string) => (pageRefs as any)[currRef].current.scrollIntoView({ behavior: 'smooth' });

  // chains
  const chains = [chain.mainnet]

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: process.env.WALLETCONNECT_PROJECT_ID || '' }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'bestfoodalex', chains }) as any,
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  
  const web3modalConfig = {
    projectId: process.env.WALLETCONNECT_PROJECT_ID || '',
    theme: 'dark' as const,
    accentColor: 'default' as const,
    ethereumClient,
  };
  
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Grommet theme={theme} full>
          <Landing pageRefs={pageRefs} refCallback={scrollToRef} />
          <About pageRefs={pageRefs} />
          <Web pageRefs={pageRefs} />
          <Influence pageRefs={pageRefs} refCallback={scrollToRef} />
          <CopyrightFooter refCallback={scrollToRef} />
        </Grommet>
      </WagmiConfig>
      <Web3Modal {...web3modalConfig} />
    </>
  );
};

export default App;
