import axios from "axios";

const API_URL = "https://gemini-chatbot-application-2.onrender.com";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/qna/ask`,
            { question }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching chat response:", error);
        throw error;
    }
};
