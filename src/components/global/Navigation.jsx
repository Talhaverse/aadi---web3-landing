import { useState,useEffect } from "react";
// import { ethers } from 'ethers';




function Navigation() {

  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  

  return (
    
    <section className="mx-auto border-white/20 border-t 2xl:max-w-7xl bg-black border-b justify-center lg:fixed lg:z-50 w-full">
      <div className="mx-auto bg-black justify-center w-full">
        <div className="mx-auto border-white/20 border-x max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="text-white text-center items-center w-full flex flex-col justify-between md:px-0 sm:flex-row sm:px-8">
            <a href="/" className="text-white text-xs font-display inline-flex items-center md:px-8 md:text-center py-4 uppercase">
              <span><p className="uppercase font-display text-2xl">AADI<span className="text-red-500 font-normal">.</span> </p></span>
            </a>

            <div>

  

<a
          onClick={requestAccount}
          href="https://walletconnect-blue.vercel.app/"
          className=" connect-button w-full bg-carrot duration-200 font-display hover:bg-black text-white lg:w-auto px-6 py-4 sm:rounded-full text-center text-xs uppercase"
        >
          Connect Wallet
            </a>

                       
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default Navigation;
