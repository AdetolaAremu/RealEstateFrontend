const process = {
  env: {
    NODE_ENV: "development",
    
    // Local Server
    SERVICE_URL:"http://localhost:8000/api",

    // Heroku live server
    // SERVICE_URL: "https://loaney.herokuapp.com/api"
  }
}

export default process;