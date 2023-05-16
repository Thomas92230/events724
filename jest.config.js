module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '\\.scss$'],
  };

 module.exports = {
    // ...
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };
  