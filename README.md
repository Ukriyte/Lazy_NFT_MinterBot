# Lazy_NFT_MinterBot
## Takes the ipfs hash of the metadata file and returns the transaction hash of the same file i.e newly minted NFT
## What problems does it solve?
-> One stop solution for a good user experience in minting of ERC-721 tokens.

-> You can run the bot on your local machine or an online environment like repl.it
## Environment variables:
You need to set the following environment variables in the .env file
```bash
API_URL="your Api_url goes here"
PRIVATE_KEY="your private key goes here"
PUBLIC_KEY="Your public key goes here"
```
You can grab the public key private key from your metamask wallet
For the RPC URL, create an app on the network of your keys and copy the API key of the same
## How to create a NFT without the bot
-> Import all the files in a folder

-> Run the following commands one by one within directory of the folder to install the required dependencies
```bash
npm init -y
npm install --save-dev hardhat
npx install hardhat
npm install @alch/alchemy-web3
```
-> Run the following command to mint the NFT. The terminal will return the transaction hash which can be used to check on the transaction by using respective network explorer.
```bash
node scripts/mintNFT.js
```
Note: the mintNFT function in scripts/mintNFT.js should have the ipfs hash of the NFT you want to mint.
For getting the ipfs hash, you can use pinata or other ipfs providers

## How to run the bot?
Environment variables 
```bash
TOKEN="Your bot token goes here"
```
commands you need to run:
```bash
npm install discord.js
node index.js
```
create a new terminal and run:
```bash
node deploy-commands.js
```
You have successfully deployed the bot on your server.
