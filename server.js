const express = require('express');
const app = express();
var port = 4000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./Connection/app.js');

app.get('/getAccounts', (req, res) => {
  console.log("**** GET /getAccounts ****");
  truffle_connect.start(function (answer) {
      res.send(answer);
  })
});


app.listen(port, () => {

    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      // Use Mist/MetaMask's provider
        truffle_connect.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    console.log("Express Listening at http://localhost:" + port);

});