# AI Image Generator

## Overview

This project is a Next.js application that allows users to generate images based on text descriptions using OpenAI's image generation API. Users can enter a description of the image they wish to generate, and the application displays the generated image.

## Features

- **Text-based Image Generation:** Users can input any text description to generate an image that matches the description.
- **Responsive UI:** Built with Material-UI, the interface is fully responsive and user-friendly.

## Setup and Run Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your OpenAI API key in a `.env.local` file as `NEXT_PUBLIC_OPENAI_API_KEY=your_api_key_here`.
4. Run the application in development mode using `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Using the Application

Enter a description of the image you wish to generate in the input field and click on the "Generate" button. The application will then display the generated image based on your description.

## API Usage

This application uses the OpenAI API for image generation. You need to obtain an API key from OpenAI and set it in the project's environment variables as described in the setup instructions.

Please refer to OpenAI's documentation for details on usage limits and API key management.
