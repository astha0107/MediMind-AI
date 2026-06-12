import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm MediMind AI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const getAIResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("fever")) {
      return "Stay hydrated, rest well, and monitor your temperature. Consult a doctor if the fever persists.";
    }

    if (msg.includes("headache")) {
      return "Try resting in a quiet environment and stay hydrated. Seek medical advice if headaches are severe.";
    }

    if (msg.includes("cold") || msg.includes("cough")) {
      return "Drink warm fluids, get enough rest, and monitor your symptoms.";
    }

    if (msg.includes("medicine")) {
      return "You can use the Medicine Search page to learn more about medicines.";
    }

    return "I'm here to assist with general healthcare guidance. Please consult a doctor for medical diagnosis.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiMessage = {
      sender: "ai",
      text: getAIResponse(input),
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        background: "#eef8f9",
        padding: "50px",
      }}
    >
      <h1
        style={{
          color: "#14B8C4",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        MediMind AI Chatbot
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Ask health-related questions for general guidance.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "35px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "30px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: "15px 20px",
                  borderRadius: "20px",
                  background:
                    msg.sender === "user"
                      ? "#14B8C4"
                      : "#f2f2f2",
                  color:
                    msg.sender === "user"
                      ? "white"
                      : "#333",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            display: "flex",
            padding: "25px",
            borderTop: "1px solid #eee",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
            style={{
              flex: 1,
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid #ddd",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            onClick={handleSend}
            style={{
              marginLeft: "15px",
              padding: "18px 35px",
              border: "none",
              borderRadius: "18px",
              background: "#14B8C4",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;