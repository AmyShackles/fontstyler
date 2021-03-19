import React from "react";
import { FontFamilyPicker } from "./FontFamilyPicker.js";
import { makeStyles } from "@material-ui/styles";
import { findBackgroundColor } from "../utils/colors.js";

const useStyles = makeStyles({
    radioGroup: {
        display: "flex",
    },
    main: (props) => ({
        color: props.color,
        backgroundColor: findBackgroundColor(props.color),
        fontFamily: props.fontFamily,
    }),
    loading: (props) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 30px)",
        fontSize: "2.5rem",
        color: props.color,
        backgroundColor: findBackgroundColor(props.color),
    }),
    form: (props) => ({
        fontFamily: props.fontFamily,
        color: props.color,
        backgroundColor: findBackgroundColor(props.color),
        "& select": {
            fontFamily: props.fontFamily || "sans-serif",
            color: props.color,
            backgroundColor: findBackgroundColor(props.color),
            width: "100%",
            height: "50px",
        },
        "& label": {
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
        },
        "& legend": {
            textTransform: "uppercase",
        },
    }),
    firstBox: (props) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }),
});

export const FontStyler = ({ type, isLoading, children }) => {
    const [color, setColor] = React.useState(
        localStorage.getItem(`${type}-color`) || "#000000"
    );
    const [fontType, setFontType] = React.useState(
        localStorage.getItem(`${type}-fontType`) || undefined
    );
    const [fontFamily, setFontFamily] = React.useState(
        localStorage.getItem(`${type}-fontFamily`) || "sans-serif"
    );
    const props = { fontFamily, color };
    const classes = useStyles(props);
    const computedType = type === "h" ? "h1,h2,h3,h4,h5,h6" : type;
    const visualType = (() => {
        switch (type) {
            case "h":
                return "heading";
            case "p":
                return "paragraph";
            default:
                return type;
        }
    })();
    React.useEffect(() => {
        if (fontFamily && color) {
            [...document.querySelectorAll(computedType)].forEach((val) => {
                val.style.fontFamily = fontFamily;
                val.style.color = color;
            });
            document.body.style.backgroundColor = findBackgroundColor(color);
        } else if (fontFamily) {
            [...document.querySelectorAll(computedType)].forEach((val) => {
                val.style.fontFamily = fontFamily;
                val.style.color = "#000000";
            });
        } else if (color) {
            [...document.querySelectorAll(computedType)].forEach((val) => {
                val.style.color = color;
                val.style.fontFamily = "sans-serif";
            });
            document.body.style.backgroundColor = findBackgroundColor(color);
        }
    }, [color, fontFamily, computedType]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
        localStorage.setItem(`${type}-color`, e.target.value);
    };
    const handleFontTypeChange = (e) => {
        setFontType(e.target.value);
        localStorage.setItem(`${type}-fontType`, e.target.value);
        if (e.target.value === "Display" || e.target.value === "Handwriting") {
            setFontFamily("cursive");
        } else {
            setFontFamily(e.target.value.toLowerCase());
        }
    };
    return isLoading ? (
        <div className={classes.loading}>
            <p className="rotate-center">Loading</p>
        </div>
    ) : (
        <div className={classes.main}>
            <form className={classes.form}>
                <fieldset>
                    <legend>Choose your {visualType} styling</legend>
                    <div className={classes.firstBox}>
                        <fieldset>
                            <legend>Color</legend>
                            <input
                                type="color"
                                id={`${type}-color`}
                                onChange={handleColorChange}
                                value={color}
                            />
                            <label htmlFor={`${type}-color`} id="colorLabel">
                                {color.toUpperCase()}
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>Font Type</legend>
                            <div className={classes.radioGroup}>
                                <label htmlFor={`${type}-fontFamilyDisplay`}>
                                    Display
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Display"
                                        id={`${type}-fontFamilyDisplay`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Display"}
                                    />
                                </label>
                                <label
                                    htmlFor={`${type}-fontFamilyHandwriting`}
                                >
                                    Handwriting
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Handwriting"
                                        id={`${type}-fontFamilyHandwriting`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Handwriting"}
                                    />
                                </label>
                                <label htmlFor={`${type}-fontFamilyMonospace`}>
                                    Monospace
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Monospace"
                                        id={`${type}-fontFamilyMonospace`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Monospace"}
                                    />
                                </label>
                                <label htmlFor={`${type}-fontFamilySansSerif`}>
                                    Sans-Serif
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Sans-Serif"
                                        id={`${type}-fontFamilySansSerif`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Sans-Serif"}
                                    />
                                </label>
                                <label htmlFor={`${type}-fontFamilySerif`}>
                                    Serif
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Serif"
                                        id={`${type}-fontFamilySerif`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Serif"}
                                    />
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    {fontType && (
                        <FontFamilyPicker
                            selectFontFamily={setFontFamily}
                            fontFamily={fontFamily}
                            fontType={fontType}
                            type={type}
                        />
                    )}
                </fieldset>
            </form>
            {children}
        </div>
    );
};
