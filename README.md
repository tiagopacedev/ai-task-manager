# AI Task Manager

## Overview

AI Task Manager lets users submit simple task descriptions and have them automatically refined by an AI chatbot based on the project’s tech stack. The goal is to transform basic ideas into structured, actionable tasks—just like a product manager would.

## Features

- Submit a simple task description (e.g., "create login form with authentication")
- AI (OpenAI API) refines the description into detailed, structured JSON
- Iterative chat for clarifying or improving tasks
- Stores all chat history and task refinements
- Saves finalized tasks and creates vector embeddings for semantic search
- Semantic search: ask the chatbot about similar or related tasks

## Tech Stack

- **Frontend:** React Router 7 (Framework Mode), TypeScript, shadcn/ui, Tailwind CSS
- **Database:** SQLite
- **ORM:** Prisma ORM
- **AI:** OpenAI API (LLM)
- **Vector Storage:** Redis for fast retrieval

## Example Workflow

1. User submits a task description.
2. The system sends it (plus tech stack info) to OpenAI with a prompt like:

   ```
   This project uses React Router 7 (framework mode), SQLite, and Prisma ORM.
   Please refine the following task description and return a JSON object with:
   title, description, steps, estimated_time, acceptance_criteria, suggested_tests, and implementation_suggestion.

   Original description: "create login form with authentication"
   ```

3. OpenAI returns a structured JSON, e.g.:

   ```json
   {
     "title": "Secure Login Form with Authentication",
     "description": "Implement a modern login form with field validation, session-based authentication, and real-time error feedback.",
     "estimated_time": "2 days",
     "steps": [
       "Create a form component using React",
       "Add field validation using a suitable library",
       "Connect backend for user authentication",
       "Persist sessions using SQLite",
       "Test full login and logout flow"
     ],
     "suggested_tests": [
       "it('should render login form correctly')",
       "it('should validate input fields')",
       "it('should authenticate valid credentials')",
       "it('should prevent access with invalid credentials')"
     ],
     "acceptance_criteria": [
       "Login form displays properly with required fields",
       "Invalid input is correctly flagged",
       "Valid users can log in and maintain a session",
       "Users are redirected upon login and logout"
     ],
     "implementation_suggestion": "Use React Hook Form for input validation, Prisma ORM for managing user data, and configure protected routes using React Router 7."
   }
   ```

## Chat & Vector Search

- All conversations are stored and can be revisited.
- Finalized tasks are saved as vector embeddings for semantic/related-task search.
- Chatbot supports questions like:
  - "Which tasks involve authentication?"
  - "List tasks that deal with form validation."

## Quick Start

```bash
npm install
cp .env.example .env   # Add your OpenAI and DB keys
npx prisma migrate dev --name init
npm run dev
```

App runs at http://localhost:5173
