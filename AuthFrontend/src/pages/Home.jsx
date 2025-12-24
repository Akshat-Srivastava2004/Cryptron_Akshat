"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
 const [hoveredFeature, setHoveredFeature] = useState(null)
 let navigate = useNavigate();
  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  }

  const animatedBlobStyle = (top, left, delay) => ({
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    top,
    left,
    filter: "blur(60px)",
    animation: `float ${8 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  })

  const contentStyle = {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    color: "white",
    maxWidth: "800px",
    padding: "40px 20px",
  }

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    animation: "slideUp 0.8s ease-out",
  }

  const subtitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "10px",
    opacity: 0.95,
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  }

  const funnyTextStyle = {
    fontSize: "1.1rem",
    marginBottom: "40px",
    opacity: 0.9,
    fontStyle: "italic",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  }

  const featuresContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
    width: "100%",
  }

  const featureCardStyle = (isHovered) => ({
    background: isHovered ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "30px 20px",
    borderRadius: "15px",
    cursor: "pointer",
    transform: isHovered ? "translateY(-10px) scale(1.05)" : "translateY(0)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: isHovered ? "0 15px 35px rgba(0, 0, 0, 0.2)" : "0 5px 15px rgba(0, 0, 0, 0.1)",
  })

  const featureIconStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
  }

  const featureTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "8px",
  }

  const featureDescStyle = {
    fontSize: "0.9rem",
    opacity: 0.9,
  }

  const buttonsContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  }

  const buttonStyle = () => ({
    padding: "16px 40px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    transform: "scale(1)",
  })

  const loginButtonStyle = {
    ...buttonStyle("primary"),
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
  }

  const signupButtonStyle = {
    ...buttonStyle("secondary"),
    background: "rgba(255, 255, 255, 0.25)",
    color: "white",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.5)",
  }

  const features = [
    { icon: "🔐", title: "Secure", desc: "Bank-level encryption (we promise!)" },
    { icon: "⚡", title: "Lightning Fast", desc: "So fast it'll make you dizzy" },
    { icon: "😊", title: "User Friendly", desc: "Even grandma can use it" },
    { icon: "🎯", title: "Reliable", desc: "99.9% uptime (the 0.1% is for coffee)" },
  ]

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        button {
          transition: all 0.3s ease;
        }
        button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3) !important;
        }
        button:active {
          transform: translateY(-1px) !important;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>

      <div style={animatedBlobStyle("-10%", "-5%", 0)}></div>
      <div style={animatedBlobStyle("60%", "70%", 2)}></div>
      <div style={animatedBlobStyle("30%", "80%", 4)}></div>

      <div style={contentStyle}>
        <h1 style={titleStyle}>Welcome! 🎉</h1>
        <h2 style={subtitleStyle}>SecureAuth</h2>
        <p style={funnyTextStyle}>
          "The only password we'll ever ask you for is the one you create yourself. We're not monsters!" 😄
        </p>

        <div style={featuresContainerStyle}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={featureCardStyle(hoveredFeature === idx)}
              onMouseEnter={() => setHoveredFeature(idx)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={featureIconStyle}>{feature.icon}</div>
              <div style={featureTitleStyle}>{feature.title}</div>
              <div style={featureDescStyle}>{feature.desc}</div>
            </div>
          ))}
        </div>

        <div style={buttonsContainerStyle}>
          <button
            style={loginButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)"
              e.target.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"
              e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            style={signupButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)"
              e.target.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)"
              e.target.style.background = "rgba(255, 255, 255, 0.35)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"
              e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)"
              e.target.style.background = "rgba(255, 255, 255, 0.25)"
            }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
