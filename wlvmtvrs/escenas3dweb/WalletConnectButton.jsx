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
        <div>
            {account ? (
                <p>Connected: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnectButton;