
const {defaults} = require('jest-config');
module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
      },
      moduleDirectories: ["node_modules"],
  // ...
};