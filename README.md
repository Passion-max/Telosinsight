# AI-Powered Smart Contract Advisor

## Description
This project is an AI-powered smart contract advisor built using Next.js. It allows users to analyze Telos smart contracts and gain insights into their functionalities and interactions.

## Features
- Analyze smart contracts on the Telos blockchain.
- Display a list of recently deployed smart contracts.
- User-friendly interface with real-time analysis feedback.

## Installation

1. **Clone the repository:**
   ```bash
   git clone [Your Repository URL]
   cd [Your Project Directory]

##  Install dependencies:

`npm install`

## Setting Up Environment Variables
Create a .env.local file in your project root and add the following API keys:
or set them in vercel environment

 - NEXT_PUBLIC_WC_PROJECTID=[Your WalletConnect Project ID]
 - NEXT_PUBLIC_ALCHEMY=[Your Alchemy API Key]
 - NEXT_PUBLIC_OPENAI_API=[Your OpenAI API Key]
Replace the placeholders with your actual API keys. These keys are essential for connecting to the blockchain and utilizing AI functionalities.

##  Running the Project Locally
After setting up the environment variables, start the project using:

`npm run dev`
The application should now be running on http://localhost:3000.

## Deployment
This project is ready to be deployed on Vercel. Follow these steps for deployment:

- Push your changes to your Git repository.
- Sign up/Login to Vercel.
- Import your GitHub repository into Vercel.

Set up the following environment variables in your Vercel project settings:

-  NEXT_PUBLIC_WC_PROJECTID: Your WalletConnect Project ID.
- NEXT_PUBLIC_ALCHEMY: Your Alchemy API Key.
- NEXT_PUBLIC_OPENAI_API: Your OpenAI API Key.
Deploy your project through the Vercel dashboard.

Vercel will automatically deploy your project and provide a URL to access your live application.

Contributing
Contributions are welcome. Please open an issue first to discuss what you would like to change or add.