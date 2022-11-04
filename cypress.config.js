const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
     projectId: "gy4zhv",
     reporter: "mochawesome",
     reporterOptions: {
       reportDir: "cypress/results",
       overwrite: false,
       html: true,
       json: true,
     },
     browser: "electron",
     video: true,
     screenshot: true,
     baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    
  },
})
