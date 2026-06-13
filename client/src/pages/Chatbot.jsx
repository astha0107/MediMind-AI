import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hello! I'm MediMind AI. Ask me anything about symptoms, medicines, or general healthcare information.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setIsTyping(true);

    // Temporary AI Response
    setTimeout(() => {
      const aiMessage = {
        sender: "ai",
        text:
          "🤖 OpenAI integration coming next! This is a demo response from MediMind AI.",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        background: "#eef8f9",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#14B8C4",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        🤖 MediMind AI Chat
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Ask health-related questions and get AI assistance.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "35px",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Messages */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            overflowY: "auto",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  message.sender === "user"
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
                    message.sender === "user"
                      ? "#14B8C4"
                      : "#f3f4f6",
                  color:
                    message.sender === "user"
                      ? "white"
                      : "#333",
                  lineHeight: "1.6",
                }}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div
              style={{
                color: "#888",
              }}
            >
              MediMind AI is typing...
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "20px",
            display: "flex",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "15px",
              border: "2px solid #14B8C4",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleSend}
            style={{
              padding: "16px 30px",
              borderRadius: "15px",
              border: "none",
              background: "#14B8C4",
              color: "white",
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