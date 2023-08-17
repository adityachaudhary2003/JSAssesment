const NFTs = [];

function mintNFT(_name, _eyeColor, _shirtType, _bling) {
  const NFT = {
    "name": _name,
    "eyeColor": _eyeColor,
    "shirtType": _shirtType,
    "bling": _bling,
  };
  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name:\t\t" + NFTs[i].name);
    console.log("EyeColor:\t" + NFTs[i].eyeColor);
    console.log("Shirt Type:\t" + NFTs[i].shirtType);
    console.log("Bling:\t\t" + NFTs[i].bling);
  }
}

function getTotalSupply() {
  console.log("\nTotal Supply: " + NFTs.length);
}

mintNFT("Red", "Blue", "Green", "Yellow");
mintNFT("White", "Blue", "Green", "Yellow");
mintNFT("Purple", "Blue", "Green", "Yellow");
mintNFT("Silver", "Blue", "Green", "Yellow");
listNFTs();
getTotalSupply();
