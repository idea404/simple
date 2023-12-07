import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
// import "@matterlabs/hardhat-zksync-node";

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.3.17",
    settings: {
      isSystem: true,
    },
  },
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;