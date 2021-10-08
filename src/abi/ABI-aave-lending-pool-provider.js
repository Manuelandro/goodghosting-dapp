export default [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [{ type: "string", name: "marketId", internalType: "string" }],
  },
  {
    type: "event",
    name: "AddressSet",
    inputs: [
      { type: "bytes32", name: "id", internalType: "bytes32", indexed: false },
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
      { type: "bool", name: "hasProxy", internalType: "bool", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ConfigurationAdminUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmergencyAdminUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LendingPoolCollateralManagerUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LendingPoolConfiguratorUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LendingPoolUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LendingRateOracleUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MarketIdSet",
    inputs: [
      {
        type: "string",
        name: "newMarketId",
        internalType: "string",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PriceOracleUpdated",
    inputs: [
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProxyCreated",
    inputs: [
      { type: "bytes32", name: "id", internalType: "bytes32", indexed: false },
      {
        type: "address",
        name: "newAddress",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getAddress",
    inputs: [{ type: "bytes32", name: "id", internalType: "bytes32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getEmergencyAdmin",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getLendingPool",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getLendingPoolCollateralManager",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getLendingPoolConfigurator",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getLendingRateOracle",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "getMarketId",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getPoolAdmin",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getPriceOracle",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setAddress",
    inputs: [
      { type: "bytes32", name: "id", internalType: "bytes32" },
      { type: "address", name: "newAddress", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setAddressAsProxy",
    inputs: [
      { type: "bytes32", name: "id", internalType: "bytes32" },
      {
        type: "address",
        name: "implementationAddress",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setEmergencyAdmin",
    inputs: [
      { type: "address", name: "emergencyAdmin", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setLendingPoolCollateralManager",
    inputs: [{ type: "address", name: "manager", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setLendingPoolConfiguratorImpl",
    inputs: [
      { type: "address", name: "configurator", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setLendingPoolImpl",
    inputs: [{ type: "address", name: "pool", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setLendingRateOracle",
    inputs: [
      { type: "address", name: "lendingRateOracle", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setMarketId",
    inputs: [{ type: "string", name: "marketId", internalType: "string" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPoolAdmin",
    inputs: [{ type: "address", name: "admin", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPriceOracle",
    inputs: [{ type: "address", name: "priceOracle", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
  },
];
