# Weather Dashboard

A simple React-based Weather Dashboard that allows users to check real-time weather information for any city using the OpenWeather API.
The app is fully deployed and continuously updated via GitHub Pages + GitHub Actions CI/CD.

# Live Demo: 
[Weather Dashboard](https://rupalisodhi-dev.github.io/weather-dashboard/)

# Features

- Search weather by city name
- Real-time data from OpenWeather API
- Displays temperature, humidity, and conditions 
- Responsive and clean UI
- Automated deployment with GitHub Actions

# Screenshot
[App Screenshot](./screenshot.png)

# Tech Stack

- React.js – Frontend framework
- Axios – For API calls
- OpenWeather API – Weather data provider
- GitHub Pages – Hosting
- GitHub Actions – CI/CD for automatic deployment

# Setup Instructions
1. Clone the Repository
- git clone https://github.com/rupalisodhi-dev/weather-dashboard.git
- cd weather-dashboard

2. Install Dependencies
- npm install

3. Get an API Key
- Sign up at OpenWeather (https://openweathermap.org/)
- Generate a free API key

4. Add Environment Variable
- Create a .env file in the project root:
- REACT_APP_WEATHER_API_KEY=your_api_key_here

5. Run Locally
- npm start

6. Build for Production
- npm run build

# Deployment

The project uses GitHub Actions for CI/CD.
Every push to the main branch automatically builds and deploys the app to GitHub Pages.

# Author
### Rupali Sodhi
- [LinkedIn](https://www.linkedin.com/in/rupali-sodhi/)
