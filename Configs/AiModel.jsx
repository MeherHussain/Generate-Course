const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    "Error: API key is missing. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables."
  );
  throw new Error("API key is required to use Google Generative AI.");
}

let genAI;
try {
  genAI = new GoogleGenerativeAI(apiKey);
} catch (error) {
  console.error("Error initializing Google Generative AI:", error.message);
  throw new Error(
    "Failed to initialize Google Generative AI. Please check your API key and configuration."
  );
}

const model = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash", // Update to the latest available model
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a course Tutorail on Following Details with field as Course Name, Description, Along with chapter Name, about, Duration`,
        },
      ],
    },
  ],
});
