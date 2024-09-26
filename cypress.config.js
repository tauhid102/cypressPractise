const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      video: true,
      require('cypress-mochawesome-reporter/plugin')(on); //for html report
    },
  },
});
