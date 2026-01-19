import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const queryAssistant = async (userPrompt: string) => {
  const systemInstruction = `
    You are a technical document assistant for Sebastian's portfolio. 
    Your knowledge is strictly limited to the provided Context below.
    
    Context:
    Bio: ${PERSONAL_INFO.bio}
    Location: ${PERSONAL_INFO.location}
    Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
    Projects: ${PROJECTS.map(p => p.title + ": " + p.description).join(', ')}

    Strict Operating Rules:
    1. If a user asks for information not explicitly found in the Context above, you must reply: "That information is not included in the portfolio."
    2. Do not invent achievements, metrics, or project scope.
    3. Do not infer leadership roles or business impact.
    4. Use factual, neutral language. Avoid marketing terms or career growth claims.
    5. If asked about personal opinions, future goals, or external links not in context, use the standard fallback phrase in rule 1.
    6. Keep responses concise and direct.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.1,
      },
    });

    const output = response.text?.trim();
    return output || "That information is not included in the portfolio.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable.";
  }
};

export async function generateVisualShowcaseCopy(prompt: string) {
  const systemInstruction = `
    You generate portfolio copy based on technical facts only.
    No invented metrics. No leadership claims.
    Return JSON only. Match the schema exactly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating showcase copy:", error);
    return "{}";
  }
}