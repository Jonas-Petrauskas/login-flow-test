import "./dashboard.css";
import React, { useState } from "react";

function Dashboard() {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      console.log("Install metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  // Discord login
  window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [
      fragment.get("access_token"),
      fragment.get("token_type"),
    ];

    if (!accessToken) {
      window.location.href("/");
    }

    fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        console.log("response here");
        const { username, discriminator, avatar, id } = response;
        //set the welcome username string
        document.getElementById(
          "name"
        ).innerText = ` ${username}#${discriminator}`;

        //set the avatar image by constructing a url to access discord's cdn
        document.getElementById(
          "avatar"
        ).src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
      })
      .catch(console.error);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <div className="profile-container">
        <img src="" id="avatar" />
        <div id="name"></div>
      </div>
      <a className="logout-link" href="/">
        Logout
      </a>
      <div className="wallet-connect-container">
        <h3>{defaultAccount}</h3>
        <button onClick={connectWalletHandler}>Connet Wallet</button>
      </div>
    </div>
  );
}

export default Dashboard;
