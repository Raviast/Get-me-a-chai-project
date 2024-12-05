<!-- create a readme file for get-me-a-chai project -->
# Get Me A Chai ☕️

![Get-me-a-chai-project](https://socialify.git.ci/Raviast/Get-me-a-chai-project/image?description=1&descriptionEditable=A%20platform%20where%20creators%2C%20developers%2C%20and%20artists%20can%20receive%20support%20from%20their%20community%20through%20virtual%20chai%20(tea)%20donations.%20&language=1&name=1&owner=1&stargazers=1&theme=Light)

A platform where creators, developers, and artists can receive support from their community through virtual chai (tea) donations. Inspired by "Buy Me A Coffee" but with a desi twist! 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview
Get Me A Chai is a platform that allows creators to receive support from their audience in the form of chai donations. Supporters can send virtual chai to their favorite creators, helping them continue their creative work while fostering a community around the shared love for chai.
A modern web application built with Next.js and integrated with Razorpay payment gateway, enabling secure and seamless chai (tea) donations for creators. This platform leverages:

## Tech Stack
- **Next.js** - For server-side rendering, optimized performance, and enhanced SEO
- **Razorpay** - For secure payment processing and transaction management
- **TailwindCSS** - For responsive and maintainable styling

## Key Features
- Server-side rendering for faster page loads
- Secure payment processing
- Mobile-responsive design
- Real-time transaction updates


## Features
-   Simple chai donations starting from ₹5 (one cup of chai)
- 👤 Creator profiles with customizable pages
- 💰 Secure payment integration
- 📊 Dashboard for tracking donations
- 💌 Thank you messages to supporters
- 📱 Mobile-responsive design

## Tech Stack
- Frontend:
  - React.js
  - Tailwind CSS
  - Redux for state management
  
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  
- Payment Integration:
  - Razorpay/Stripe
  
- Authentication:
  - Using GitHub

## Installation

```bash
# Clone the repository
git clone https://github.com/Raviast/Get-me-a-chai-project.git

# Navigate to project directory
cd get-me-a-chai

# Install dependencies for backend
npm install

## Usage
# Run the project
npm run dev

# Build production
npm run build
```

## Environment Variables
 Create a .env file in the root directory with the following variables:
 ```
 # Server Configuration
 PORT=3000
 NODE_ENV=development
 
GITHUB_ID = XXXXXXXXX
GITHUB_SECRET = xxxxxxxxxx
NEXT_PUBLIC_KEY_ID = XXXXXXXXXX
KEY_SECRET = XXXXXXXXXX
NEXT_PUBLIC_URL = http://localhost:3000
NEXT_AUTH_URL = http://localhost:3000
NEXT_AUTH_SECRET = xxxxxxx

# process.env.MONGO_URI
 # Database
 MONGODB_URI=your_mongodb_connection_string
 
 # Payment Gateway
 RAZORPAY_KEY_ID=your_razorpay_key_id
 RAZORPAY_KEY_SECRET=your_razorpay_secret_key
 ```
 


 # API Endpoints
 ## Authentication
 
 - POST /api/auth/route.js - Register new user

 - POST /api/auth/route.js - User login

 - GET /api/auth/logout - User logout

## Creator Profile

 - GET /api/profile/:username - Get creator profile

 - PUT /api/profile/update - Update profile

## Donations
 - POST /api/auth/route - Create new donation

 - GET /api/donations/route - Get donation history


# Contributing
We welcome contributions! Please follow these steps:

 1. Fork the repository

 2. Create your feature branch 
    ```
    git checkout -b feature/AmazingFeature 
    ```
 3. Commit your changes (``` git commit -m 'Add some AmazingFeature'```)

 4. Push to the branch (``` 
 git push origin feature/AmazingFeature```)

 5. Open a Pull Request

# License
 This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgments
 - Inspired by Buy Me A Coffee

 - Thanks to all contributors and supporters


Made with ❤️ and lots of chai ☕️