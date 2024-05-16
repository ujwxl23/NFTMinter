import React from "react";

// Define the ConnectButton function component
export function ConnectButton() {
  return <w3m-button />;
}

// Define the Navbar component
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <h1 style={{ margin: 0 }}>NFT_Minter</h1>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
