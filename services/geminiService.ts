import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES, FLEET } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Constructing the system instruction context
const SYSTEM_INSTRUCTION = `
You are the virtual assistant for ${COMPANY_INFO.name}, a premier transport and car rental company in Accra, Ghana.
Your tone should be professional, polite, and persuasive.
Always emphasize safety, reliability, and timeliness.

Company Details:
- Location: ${COMPANY_INFO.location}
- Phone: ${COMPANY_INFO.phone}
- Mission: ${COMPANY_INFO.mission}

Services Offered:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Fleet Available:
${FLEET.map(f => `- ${f.category} (${f.capacity}): ${f.description}`).join('\n')}

Key Attributes:
- Professional drivers with 10+ years experience.
- Comprehensive insurance.
- Competitive market pricing.
- Available for individuals and corporate partnerships.

If asked about booking, encourage the user to use the "Book Now" form on the website or call ${COMPANY_INFO.phone}.
Do not invent prices. If asked for a specific price, say "Prices vary based on duration and vehicle type. Please request a quote via our booking form or call us for the best rates."
Keep responses concise (under 100 words) unless detailed information is requested.
`;

let aiClient: GoogleGenAI | null = null;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, I cannot connect to the server at the moment. Please contact us directly by phone.";
  }

  try {
    if (!aiClient) {
      aiClient = new GoogleGenAI({ apiKey: API_KEY });
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I didn't quite catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble retrieving that information right now. Please try again later or call our office.";
  }
};