import { useState,useEffect } from "react";




function Navigation() {

  //helper funcs

   function requestAccount(){
    console.log("requesting account ...")
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

  

<button
          onClick={requestAccount}
          className=" connect-button w-full bg-carrot duration-200 font-display hover:bg-black text-white lg:w-auto px-6 py-4 sm:rounded-full text-center text-xs uppercase"
        >
          Connect Wallet
            </button>

            <h3>0x11...</h3>
             
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default Navigation;
