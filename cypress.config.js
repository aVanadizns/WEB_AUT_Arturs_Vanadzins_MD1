const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zosmmi",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://demoqa.com/",
  },
});
