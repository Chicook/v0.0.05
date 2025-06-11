import React from 'react';
import { ethers } from 'ethers';

const WalletConnectButton = () => {
    const [account, setAccount] = React.useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting to wallet:", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <button onClick={connectWallet}>
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect MetaMask'}
        </button>
    );
};

export default WalletConnectButton;