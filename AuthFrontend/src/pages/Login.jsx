"use client"

import { useState } from "react"

const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: "20px",
  }

  const backgroundBlobStyle = (top, left, size) => ({
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "50%",
    top,
    left,
    filter: "blur(80px)",
  })

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "50px 40px",
    width: "100%",
    maxWidth: "450px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    position: "relative",
    zIndex: 10,
  }

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    textShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  }

  const subtitleStyle = {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "30px",
    textShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }

  const formGroupStyle = {
    marginBottom: "20px",
  }

  const labelStyle = {
    display: "block",
    color: "white",
    fontSize: "0.95rem",
    fontWeight: "600",
    marginBottom: "8px",
    textShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "1rem",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  }

  const inputFocusStyle = {
    ...inputStyle,
    background: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
    outline: "none",
  }

  const passwordContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
  }

  const toggleButtonStyle = {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    color: "rgba(255, 255, 255, 0.8)",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0",
    transition: "color 0.3s ease",
  }

  const rememberMeStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
    fontSize: "0.95rem",
  }

  const checkboxStyle = {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#f093fb",
  }

  const rememberTextStyle = {
    color: "rgba(255, 255, 255, 0.9)",
  }

  const loginButtonStyle = {
    width: "100%",
    padding: "14px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "25px",
    boxShadow: "0 10px 25px rgba(245, 87, 108, 0.4)",
    textShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  }

  const forgotLinkStyle = {
    marginTop: "15px",
    textAlign: "center",
  }

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
    textShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }

  const dividerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "25px 0",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
  }

  const dividerLineStyle = {
    flex: 1,
    height: "1px",
    background: "rgba(255, 255, 255, 0.3)",
  }

  const socialButtonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "10px",
  }

  const bottomTextStyle = {
    marginTop: "25px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "0.95rem",
  }

  const signupLinkStyle = {
    ...linkStyle,
    color: "#f093fb",
    fontWeight: "600",
    textDecoration: "underline",
    marginLeft: "5px",
  }

  const backButtonStyle = {
    position: "absolute",
    top: "30px",
    left: "30px",
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    zIndex: 20,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert(`Welcome back! Logged in as ${email}`)
    }, 1500)
  }

  return (
    <div style={containerStyle}>
      <style>{`
        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
          -webkit-text-fill-color: white;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          div {
            padding: 30px 20px !important;
          }
        }
      `}</style>

      <div style={backgroundBlobStyle("-10%", "-5%", 400)}></div>
      <div style={backgroundBlobStyle("60%", "70%", 350)}></div>

      <button
        style={backButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.3)"
          e.target.style.transform = "translateY(-2px)"
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.2)"
          e.target.style.transform = "translateY(0)"
        }}
        onClick={() => onNavigate("home")}
      >
        ← Back
      </button>

      <div style={cardStyle}>
        <h1 style={titleStyle}>Welcome Back! 👋</h1>
        <p style={subtitleStyle}>Login to your account and continue your journey</p>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              style={inputStyle}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Password</label>
            <div style={passwordContainerStyle}>
              <input
                style={{ ...inputStyle, paddingRight: "40px" }}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                required
              />
              <button type="button" style={toggleButtonStyle} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div style={rememberMeStyle}>
            <input type="checkbox" id="remember" style={checkboxStyle} />
            <label htmlFor="remember" style={rememberTextStyle}>
              Remember me (for your sanity)
            </label>
          </div>

          <button
            type="submit"
            style={loginButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 15px 35px rgba(245, 87, 108, 0.6)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 10px 25px rgba(245, 87, 108, 0.4)"
            }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div style={forgotLinkStyle}>
            <a style={linkStyle} href="#forgot">
              Forgot password?
            </a>
          </div>
        </form>

        <div style={dividerStyle}>
          <div style={dividerLineStyle}></div>
          <span>or</span>
          <div style={dividerLineStyle}></div>
        </div>

        <button
          style={socialButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.15)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.5)"
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.1)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)"
          }}
        >
          🔵 Continue with Google
        </button>

        <button
          style={{ ...socialButtonStyle, marginBottom: "0" }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.15)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.5)"
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.1)"
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)"
          }}
        >
          🐙 Continue with GitHub
        </button>

        <div style={bottomTextStyle}>
          Don't have an account?
          <span style={signupLinkStyle} onClick={() => onNavigate("register")} role="button" tabIndex={0}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
