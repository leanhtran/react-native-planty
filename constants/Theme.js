import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Lato-Black", fontSize: SIZES.largeTitle, lineHeight: 65 },
    h1: { fontFamily: "Lato-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Lato-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Lato-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Lato-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Lato-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Lato-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Lato-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Lato-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Lato-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};
export const BUTTONS={
    btnRadius :{
        borderRadius: 60,
        marginRight: '10%',
        marginLeft: '10%',
        marginTop: '3%',
        marginBottom: '3%',
    },

}

const appTheme = { COLORS, SIZES, FONTS,BUTTONS };

export default appTheme;