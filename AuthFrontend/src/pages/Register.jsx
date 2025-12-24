"use client"

import { useState } from "react"

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)

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
    maxWidth: "500px",
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

  const inputErrorStyle = {
    ...inputStyle,
    borderColor: "#ff6b6b",
    background: "rgba(255, 107, 107, 0.1)",
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
  }

  const errorMessageStyle = {
    color: "#ff6b6b",
    fontSize: "0.85rem",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  }

  const checkboxStyle = {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#f093fb",
  }

  const termsStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginTop: "20px",
    fontSize: "0.9rem",
  }

  const termsTextStyle = {
    color: "rgba(255, 255, 255, 0.85)",
  }

  const signupButtonStyle = {
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

  const bottomTextStyle = {
    marginTop: "25px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "0.95rem",
  }

  const loginLinkStyle = {
    color: "#f093fb",
    fontWeight: "600",
    textDecoration: "underline",
    marginLeft: "5px",
    cursor: "pointer",
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

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (name === "confirmPassword" || name === "password") {
      const newFormData = { ...formData, [name]: value }
      setPasswordMatch(newFormData.password === newFormData.confirmPassword)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!passwordMatch) {
      alert("Passwords do not match!")
      return
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions!")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert(`Welcome ${formData.name}! Account created successfully!`)
      onNavigate("home")
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
        <h1 style={titleStyle}>Join Us! 🚀</h1>
        <p style={subtitleStyle}>Create your account in just a few clicks</p>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Full Name</label>
            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              style={inputStyle}
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
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
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                required
              />
              <button type="button" style={toggleButtonStyle} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Confirm Password</label>
            <div style={passwordContainerStyle}>
              <input
                style={{
                  ...(passwordMatch ? inputStyle : inputErrorStyle),
                  paddingRight: "40px",
                }}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                required
              />
              <button
                type="button"
                style={toggleButtonStyle}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {!passwordMatch && formData.confirmPassword && <div style={errorMessageStyle}>⚠️ Passwords don't match</div>}
          </div>

          <div style={termsStyle}>
            <input
              type="checkbox"
              id="terms"
              name="agreeTerms"
              style={checkboxStyle}
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms" style={termsTextStyle}>
              I agree to the Terms of Service and Privacy Policy (I actually read them 👀)
            </label>
          </div>

          <button
            type="submit"
            style={signupButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 15px 35px rgba(245, 87, 108, 0.6)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 10px 25px rgba(245, 87, 108, 0.4)"
            }}
            disabled={isLoading || !passwordMatch}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div style={bottomTextStyle}>
          Already have an account?
          <span style={loginLinkStyle} onClick={() => onNavigate("login")} role="button" tabIndex={0}>
            Login
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
