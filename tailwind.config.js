tailwind.config = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "bg-pan": "bg-pan-top 8s both infinite",
      },
      keyframes: {
        "bg-pan-top": {
          "0%, 100%": { "background-position": "top" },
          "50%": { "background-position": "bottom" },
        },
      },
      backgroundSize: {
        "size-2": "200% 200%",
      },
    },
  },
};
