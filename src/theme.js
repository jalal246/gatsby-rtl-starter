const colors = {
  lighter: "#373940", // light blue
  dark: "#282c34", // dark blue
  darker: "#20232a", // really dark blue
  brand: "#61dafb", // electric blue
  brandLight: "#bbeffd",
  text: "#1a1a1a", // very dark grey / black substitute
  subtle: "#6d6d6d", // light grey for text
  subtleOnDark: "#999",
  divider: "#ececec", // very light grey
  white: "#ffffff",
  black: "#000000",
};

const articleLayout = {
  container: {
    display: "flex",
    minHeight: "calc(100vh - 60px)",
    marginBottom: 120,
    marginTop: 40,
  },

  content: {
    lineHeight: "25px",

    "& > p:first-of-type": {
      fontSize: 18,
      fontWeight: 300,
      color: colors.subtle,

      "& a, & strong": {
        fontWeight: 400,
      },
    },

    "& p": {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: "42em",

      "&:first-of-type": {
        marginTop: 15,
      },
    },

    "& h3 + p, & h3 + p:first-of-type": {
      marginTop: 20,
    },

    "& hr": {
      height: 1,
      marginBottom: -1,
      border: "none",
      borderBottom: `1px solid ${colors.divider}`,
      marginTop: 40,

      ":first-of-type": {
        marginTop: 0,
      },
    },

    "& h1": {
      lineHeight: 1.2,
    },

    "& h2": {
      "::before": {
        content: `" "`,
        display: "block",
        borderBottom: `1px solid ${colors.divider}`,
        paddingTop: 44,
        marginBottom: 40,
      },

      lineHeight: 1.2,

      ":first-of-type": {
        "::before": {
          content: `" "`,
          display: "block",
          borderBottom: 0,
          paddingTop: 40,
          marginTop: -80,
        },
      },
    },

    "& hr + h2": {
      borderTop: 0,
      marginTop: 0,
    },

    "& h3": {
      "::before": {
        content: `" "`,
        display: "block",
        paddingTop: 90,
        marginTop: -45,
      },
    },

    "& h2 + h3, & h2 + h3:first-of-type": {
      "::before": {
        content: `" "`,
        display: "block",
        paddingTop: 60,
        marginTop: -30,
      },
    },

    "& h4": {
      "::before": {
        content: `" "`,
        display: "block",
        paddingTop: 100,
        marginTop: -50,
      },

      fontSize: 20,
      color: colors.subtle,
      lineHeight: 1.3,
      fontWeight: 400,
    },

    "& h4 + p": {
      marginTop: 20,
    },

    "& ol, & ul": {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,

      "& p, & p:first-of-type": {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2,
      },

      "& li": {
        marginTop: 10,
      },

      "& li.button-newapp": {
        marginTop: 0,
      },

      "& ol, & ul": {
        marginLeft: 20,
        marginTop: 10,
      },
    },

    "& img": {
      maxWidth: "100%",
    },

    "& ol": {
      listStyle: "decimal",
    },

    "& ul": {
      listStyle: "disc",
    },
  },
};

export { colors, articleLayout };
