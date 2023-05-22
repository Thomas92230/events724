module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '\\.scss$'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: "jsdom",
  // ... autres configurations de Jest ...
};

  