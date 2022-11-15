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