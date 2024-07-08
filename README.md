# Project Setup

## Features

- **Dual AI Assistants:** Interact with two different AI assistants.
- **Copy Responses:** Easily copy AI-generated responses.
- **Text-to-Speech:** Convert text responses to audio.
- **Feedback System:** Provide feedback on responses.
- **User Authentication:** Secure authentication system.
- **Persistent Chat:** Save chat history to local storage.
- **Contextual Conversations:** Maintain chat context for better interactions.

## Technologies Used

- **OpenAI API**
- **React with Vite**
- **TailwindCSS with DaisyUI**
- **react-icons**
- **react-markdown**
- **react-syntax-highlighter**
- **FastAPI**

## Installation

### Prerequisites

- Docker
- Docker Compose
- Python
- Node.js (minimum version 18)

### Running with Docker

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Add your `OPENAI_API_KEY` to the `.env` file inside the `backend` folder:

    ```sh
    echo "OPENAI_API_KEY=your_openai_api_key" > backend/.env
    ```

3. Run Docker Compose to set up the project:

    ```sh
    docker compose up
    ```

    This will start the backend server on port `8000` and the frontend on port `5173`.

### Running Locally

To run this application locally, ensure you have Python installed. Follow these steps:

#### Backend

1. Install dependencies:

    ```sh
    pip install fastapi uvicorn openai
    ```

2. Run the application:

    ```sh
    uvicorn main:app --host 0.0.0.0 --port 8000
    ```

    The app will be accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000).

#### Frontend

1. Ensure you have Node.js installed (minimum version 18).

2. Install dependencies:

    ```sh
    npm i
    ```

3. Run the development server:

    ```sh
    npm run dev
    ```

    The frontend will be accessible at [http://localhost:5173](http://localhost:5173).

## Future Enhancements

- Integrate the GPT-4 model.
- Add an image generation feature.
- Implement a fully dynamic backend.
