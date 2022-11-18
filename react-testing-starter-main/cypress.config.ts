import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
  projectId: "7s5okt",
  viewportHeight: 1000,
  viewportWidth: 1280,

  retries: {
    runMode: 2,
    openMode: 1,
  },

  env: {

  
    apiUrl: "http://localhost:3000",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3000/__coverage__",
      
    },
    
  },

  experimentalStudio: true,


 
  
});

 