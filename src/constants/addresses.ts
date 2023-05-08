import { Addresses, ChainId } from "../types";

const mainnetAddresses: Addresses = {
  LOOKS: "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
  EXCHANGE_V2: "0x0000000000E655fAe4d56241588680F86E3b2377",
  TRANSFER_MANAGER_V2: "0x000000000060C4Ca14CfC4325359062ace33Fe3D",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ORDER_VALIDATOR_V2: "0x2a784a5b5C8AE0bd738FBc67E4C069dB4F4961B7",
  REVERSE_RECORDS: "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C",
  LOOKS_LP_V3: "0x4b5Ab61593A2401B1075b90c04cBCDD3F87CE011",
  STAKING_POOL_FOR_LOOKS_LP: "0x2A70e7F51f6cd40C3E9956aa964137668cBfAdC5",
  AGGREGATOR_UNISWAP_V3: "0x3ab16Af1315dc6C95F83Cbf522fecF98D00fd9ba",
};

const goerliAddresses: Addresses = {
  LOOKS: "0x20A5A36ded0E4101C3688CBC405bBAAE58fE9eeC",
  EXCHANGE_V2: "0x35C2215F2FFe8917B06454eEEaba189877F200cf",
  TRANSFER_MANAGER_V2: "0xC20E0CeAD98abBBEb626B77efb8Dc1E5D781f90c",
  WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  ORDER_VALIDATOR_V2: "0x7454Cc9AEB024bcE6A2CDC49ad4733B4D8215fb8",
  REVERSE_RECORDS: "0x333Fc8f550043f239a2CF79aEd5e9cF4A20Eb41e",
  LOOKS_LP_V3: "",
  STAKING_POOL_FOR_LOOKS_LP: "",
  AGGREGATOR_UNISWAP_V3: "0x63c38B3BE3eF075a00a5edaeC36F499088c7334C",
};

const sepoliaAddresses: Addresses = {
  LOOKS: "",
  EXCHANGE_V2: "",
  TRANSFER_MANAGER_V2: "",
  WETH: "",
  ORDER_VALIDATOR_V2: "",
  REVERSE_RECORDS: "",
  LOOKS_LP_V3: "",
  STAKING_POOL_FOR_LOOKS_LP: "",
  AGGREGATOR_UNISWAP_V3: "",
};

/**
 * List of useful contract addresses
 */
export const addressesByNetwork: { [chainId in ChainId]: Addresses } = {
  [ChainId.MAINNET]: mainnetAddresses,
  [ChainId.GOERLI]: goerliAddresses,
  [ChainId.HARDHAT]: goerliAddresses,
  [ChainId.SEPOLIA]: sepoliaAddresses,
};
