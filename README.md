# AI Course Generator

AI Course Generator is a modern web application that allows users to generate, customize, and manage educational courses using AI. Built with [Next.js](https://nextjs.org/), it leverages AI to create detailed course structures, chapters, and resources, making course creation fast and accessible for everyone.

## ✨ Features

- **AI-Powered Course Generation:** Instantly generate comprehensive course outlines, chapters, and content using AI.
- **User Authentication:** Secure sign-in and sign-up powered by Clerk.
- **Interactive Dashboard:** Manage your courses, view details, and edit chapters with a user-friendly dashboard.
- **Rich UI:** Beautiful, responsive design using Tailwind CSS and styled-components.
- **YouTube Integration:** Embed and manage relevant YouTube videos for each chapter.
- **Customizable Chapters:** Edit chapter titles, descriptions, objectives, and more.
- **Resource Management:** Add and view recommended resources for each course.
- **Progressive Stepper:** Guided course creation with step-by-step navigation.

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://https://github.com/MeherHussain/Generate-Course.git
cd course-generator

Intall Dependencies:
npm install
# or
yarn install
 Configure Environment Variables
Create a .env.local file in the root directory and add your API keys:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key

Project Structure: 

course-generator/
├── app/                # Main Next.js app directory
│   ├── _components/    # Shared React components
│   ├── Create-Course/  # Course creation flow
│   ├── dashboard/      # User dashboard and management
│   └── ...             # Other app routes
├── Configs/            # AI model and service configs
├── public/             # Static assets
├── components.json     # UI component registry
├── package.json        # Project metadata and scripts
└── ...

📦 Tech Stack
Next.js
React
Tailwind CSS
styled-components
Clerk (Authentication)
Google Gemini API
YouTube Data API
Axios

📄 License
This project is licensed under the MIT License.

Happy Learning! 🚀

Made with ❤️ by Muhammad Hussain

