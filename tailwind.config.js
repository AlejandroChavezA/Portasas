/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./app/**/*.{js,jsx}",
      "./src/**/*.{js,jsx}",
      "*.{js,jsx,mdx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // Colores básicos
          white: "#ffffff",
          black: "#000000",
          // Colores neón con toques cálidos
          "neon-pink": "#ff0080",
          "neon-cyan": "#00ffff",
          "neon-purple": "#8b5cf6",
          "neon-green": "#00ff41",
          "neon-orange": "#ff6b35",
          "neon-blue": "#0080ff",
          "neon-yellow": "#ffff00",
          // Fondo oscuro con calidez
          "dark-bg": "#0a0a0a",
          "dark-surface": "#1a1a1a",
          "dark-warm": "#2d2d2d",
          // Acentos cálidos neón
          "warm-neon": "#ff6b35",
          "vintage-neon": "#d4af37",
          "coffee-neon": "#8b4513",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          "neon-glow": {
            "0%, 100%": { boxShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff" },
            "50%": { boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff" },
          },
          "warm-neon-glow": {
            "0%, 100%": { boxShadow: "0 0 5px #ff6b35, 0 0 10px #ff6b35, 0 0 15px #ff6b35" },
            "50%": { boxShadow: "0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35" },
          },
          "vintage-glow": {
            "0%, 100%": { boxShadow: "0 0 5px #d4af37, 0 0 10px #d4af37, 0 0 15px #d4af37" },
            "50%": { boxShadow: "0 0 10px #d4af37, 0 0 20px #d4af37, 0 0 30px #d4af37" },
          },
          "neon-flicker": {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.8" },
          },
          "gentle-float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-8px)" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "neon-glow": "neon-glow 2s ease-in-out infinite alternate",
          "warm-neon-glow": "warm-neon-glow 2s ease-in-out infinite alternate",
          "vintage-glow": "vintage-glow 2s ease-in-out infinite alternate",
          "neon-flicker": "neon-flicker 1.5s ease-in-out infinite alternate",
          "gentle-float": "gentle-float 8s ease-in-out infinite",
        },
        fontFamily: {
          serif: ["Georgia", "Times New Roman", "serif"],
          sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
          mono: ["Courier New", "monospace"],
        },
        boxShadow: {
          "neon-cyan": "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff",
          "neon-pink": "0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080, 0 0 20px #ff0080",
          "neon-purple": "0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6, 0 0 20px #8b5cf6",
          "neon-green": "0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41, 0 0 20px #00ff41",
          "neon-orange": "0 0 5px #ff6b35, 0 0 10px #ff6b35, 0 0 15px #ff6b35, 0 0 20px #ff6b35",
          "vintage-neon": "0 0 5px #d4af37, 0 0 10px #d4af37, 0 0 15px #d4af37, 0 0 20px #d4af37",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
