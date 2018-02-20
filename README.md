# Express-Box
To Be Used as Truffle Box Creating API Endpoints for
Ethereum Blockchain.

We use personalised blockchain for Ethereum BlockChain
Development. This personalised blockchain is made in the
GanacheCLI.

The Smart Contract Written in solidity language
is deployed on this Ethereum Blockchain. Smart Contract is
Immutable hence, once deployed it can't be changed.

A truffle box to serve as the foundation of any Truffle and Express.js dApp.

This Box Uses NodeJS(Express JS) to provide API
endpoints to the Ethereum Blockchain smart contract so that this
smart contract can be used in Android Apps as well.

**Pre-Requisites**
1. [NodeJS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
2. [Yarn](https://stackoverflow.com/questions/42606941/install-yarn-ubuntu-16-04-linux-mint-18-1)
3. [GanacheCLI](https://github.com/trufflesuite/ganache-cli)
4. [Truffle](https://github.com/trufflesuite/truffle)

**Installation**
1. In one terminal window run the Launch GanacheCLI `ganache-cli -i 666`
  * to prevent creating a new network id everytime, we have set a default network key in the truffle config file.
  * to change that, simply go to the 'truffle.js' file and change the network_id from '666' to " * ".
2. Run `npm install` or `yarn install` to install all the node modules
3. In another terminal window go the project repositary, now, You need to compile the smart contracts written in the contracts folder. For this, `truffle compile`
4. You can see that a new build folder has been created in the root directory which contains the compiled contracts.
5. Now these contracts need to be deployed on the Blockchain. For this, `truffle migrate --network development`.
  * if you changed the network_id to " * " in step 1, you can run `truffle migrate`
7. To run the Express server `yarn start` or `nodemon server.js`, if you have nodemon installed.
8. In the browser window open `http://localhost:3000/`.
