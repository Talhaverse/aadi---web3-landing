import { useState,useEffect } from "react";




function Navigation() {

  const [walletAddress, setWalletAddress] = useState(null);


  useEffect(() => {
      const address = sessionStorage.getItem("accountAddress");  
      if (address) {
        setWalletAddress(address);
      }
 
  }, []);


   const connectMetaMaskFunc = async (SelectedChain) => {
      console.log("SelectedChain", SelectedChain);
      if (window.ethereum) {
        try {
          // Switching chain and connecting to MetaMask
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: SelectedChain === "Polygon" ? "0x13881" : "0x5" }],
          });
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
          // Handling the connected account
          handleConnectedAccount(accounts);
    
          // Adding an event listener to handle account changes
          window.ethereum.on('accountsChanged', handleConnectedAccount);
    
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        console.error('MetaMask not found.');
      }
      // const SUPPORTED_CHAINS = {
      //   Polygon: "0x89",
      //   "Ethereum mainnet": "0x1",
      // };


    }

    const handleConnectedAccount = (accounts) => {
      if (accounts.length > 0) {
        const currentAccount = accounts[0];
        console.log('Connected Account Address:', currentAccount);
    
        // Store the connected account address in session storage
        sessionStorage.setItem("accountAddress", currentAccount);
        sessionStorage.setItem("walletType", "metaMask");
    
        // Update the walletAddress state
        setWalletAddress(currentAccount);
    
        // You can perform further actions with the connected account here.
      } else {
        console.log('No connected accounts.');
      }
    };

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
          onClick={() => connectMetaMaskFunc("Ethereum mainnet")}
          className=" connect-button w-full bg-carrot duration-200 font-display hover:bg-black text-white lg:w-auto px-6 py-4 sm:rounded-full text-center text-xs uppercase"
        >
          {walletAddress
            ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                walletAddress.length - 4
              )}`
            : "Connect Wallet"}
            </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default Navigation;
