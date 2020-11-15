require("ts-node").register({ files: true });
const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
