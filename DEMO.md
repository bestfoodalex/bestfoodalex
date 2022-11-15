# CHI JS Meetup Demo: Login with Ethereum
### 15 NOV 22

---

#### Install packages
```sh
npm install @web3modal/react @web3modal/ethereum ethers
```
**Note:** `ethers` is a dependency of `web3modal` for the Ethereum wallet implementation (interacting with `window.ethereum`)

#### Add `env.local` file with WalletConnect Project ID:
```
WALLETCONNECT_PROJECT_ID=<WalletConnectProjectID>
```

#### Import Web3Modal in App
```
import { Web3Modal } from '@web3modal/react'
```
Create its config object:
```
  const web3modalConfig = {
    projectId: process.env.WALLETCONNECT_PROJECT_ID || '',
    theme: 'dark' as const,
    accentColor: 'default' as const, 
    ethereum: {
      appName: 'bestfoodalex' as const
    }
  };
```
And add the component in your JSX:
```
<Web3Modal {...web3modalConfig} />
```