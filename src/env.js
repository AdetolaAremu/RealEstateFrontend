const process = {
  env: {
    NODE_ENV: "production",
    
    // Local Server
    SERVICE_URL:"http://localhost:8000/api",

    // Heroku live server
      // SERVICE_URL: "https://deal-estate.herokuapp.com/api"
  }
}

export default process;
