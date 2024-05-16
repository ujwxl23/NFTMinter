import { useState } from "react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import Navbar from "./components/Navbar";
import Minter from "./components/Minter";

const projectId = "5bb58e9295ab0e92b591accf452aada2";

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://sepolia.infura.io/v3/94bf3301af184c15a6a94a2434a9976f",
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "http://localhost:5173",
  icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "https://sepolia.infura.io/v3/94bf3301af184c15a6a94a2434a9976f", // used for the Coinbase SDK
  defaultChainId: 11155111, // used for the Coinbase SDK
});

createWeb3Modal({
  ethersConfig,
  chains: [sepolia],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function ConnectButton() {
  return <w3m-button />;
}

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Minter />
      </div>
    </>
  );
}
