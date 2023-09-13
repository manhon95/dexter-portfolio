tailwind.config = {
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      futura: ["Futura Std", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
      },
    },
    extend: {
      width: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "bg-pan-top": "bg-pan-top 8s both infinite",
        "text-blur-out":
          "text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      },
      keyframes: {
        "bg-pan-top": {
          "0%, 100%": { "background-position": "top" },
          "50%": { "background-position": "bottom" },
        },
        "text-blur-out": {
          "0%, 100%": {
            filter: "blur(0.01)",
          },
          "50%": {
            filter: "blur(0.1rem)",
          },
        },
      },
      backgroundSize: {
        "size-2": "200% 200%",
      },
    },
  },
};
