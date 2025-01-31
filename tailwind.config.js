// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        textShadow: {
          custom: "-2px 2px 4px rgba(0, 0, 0, 0.5), 2px -2px 0 rgba(255, 255, 255, 0.9)",
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".text-shadow-custom": {
            textShadow: "-2px 2px 4px rgba(0, 0, 0, 0.5), 2px -2px 0 rgba(255,255,255,0.9)",
          },
        });
      },
    ],
  };