import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
 genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export async function askGemini(prompt) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const result = await model.generateContent(
    prompt
  );

  return result.response.text();
}