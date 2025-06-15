import Web3 from 'web3';

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable().catch(error => {
        console.error("User denied account access");
    });
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
}

export const getAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
};

export const getBalance = async (address) => {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
};

export const sendTransaction = async (to, amount) => {
    const accounts = await web3.eth.getAccounts();
    const transactionParameters = {
        to: to,
        from: accounts[0],
        value: web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
    };

    return await web3.eth.sendTransaction(transactionParameters);
};