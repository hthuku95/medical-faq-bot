import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCf1OdM2hnmLeNuH4ABeJy6jFbolXWBQCQ"); 
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const answerMedicalQuestion = async (question) => {
  try {
    const prompt = `Answer the following medical/health-related question:\n\n${question}\n\nProvide a detailed and accurate response.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new Error("Error answering question.");
  }
};