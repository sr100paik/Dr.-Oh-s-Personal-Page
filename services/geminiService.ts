
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateManagementInsight = async (industry: string, concern: string) => {
  if (!API_KEY) return "API Key가 설정되지 않았습니다.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `당신은 대한민국 최고의 경영 컨설턴트 'Pro OH'입니다. 
      다음 산업 분야(${industry})의 경영인이 겪고 있는 고민(${concern})에 대해, 
      1. 핵심 원인 분석 2. 전략적 해결 방안 3. 기대 효과를 포함한 
      매우 전문적이고 통찰력 있는 조언을 한국어로 작성해주세요. 
      문체는 신중하고 권위 있으며 설득력이 있어야 합니다.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "통찰력을 생성하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};
