tailwind.config = {
  theme: {
    extend: {
      spacing: {
        104: "26rem",
        112: "28rem",
        128: "32rem",
        160: "40rem",
      },
      fontSize: {
        "2xs": ["0.625rem", "0.75rem"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        futura: ["Futura Std", "sans-serif"],
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
