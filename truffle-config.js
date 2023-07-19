
module.exports = {
    // Configure networks (Localhost, Kovan, etc.)
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
    },
  
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.12",
        optimizer: {
          enabled: true,
          runs: 200
        },
      },
    },
  };