# Basic NFT Marketplace 
Welcome to the NFT Marketplace project! This decentralized application (dApp) allows users to mint, buy, sell, and manage non-fungible tokens (NFTs). The project is built using Solidity for smart contracts, Hardhat for development and testing, and various front-end technologies.

## Installation

To run the NFT marketplace locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Dhanraj30/nft-marketplace.git
    cd nft-marketplace
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Compile the smart contracts:

    ```bash
    npx hardhat compile
    ```

4. Deploy the smart contracts to the local network:

    ```bash
    npx hardhat node
    npx hardhat run scripts/deploy.js --network localhost
    ```

5. Start the frontend development server:

    ```bash
    npm run dev
    ```

## Usage

Once the project is set up, you can use the following features of the NFT marketplace:

- **Mint NFTs**: Create new NFTs and list them for sale.
- **Buy NFTs**: Browse and purchase listed NFTs.
- **Sell NFTs**: List your owned NFTs for sale.
- **Profile Management**: View and manage your NFT collections.

### Smart Contracts

The smart contracts are located in the `contracts` directory. The main contract `NFTMarketplace.sol` handles the core functionality of the marketplace, including minting, buying, and selling NFTs.

### Frontend

The frontend of the application is built using React and Next.js. The main components and pages are located in the `src` and `pages` directories respectively. Styling is managed using CSS modules in the `styles` directory.

## Contributing

We welcome contributions to the NFT Marketplace project! If you have any suggestions, bug reports, or pull requests, please feel free to submit them.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

! [alt]("https://github.com/Dhanraj30/nft-marketplace/blob/main/Screenshot%20(171).png")

---

Feel free to customize this README file to better suit your project's needs!
