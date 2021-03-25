import React from "react";
import { FontFamilyPicker } from "./FontFamilyPicker.js";
import { makeStyles } from "@material-ui/styles";
import { findBackgroundColor, isOutlineRequired } from "../utils/colors.js";

const useStyles = makeStyles({
    radioGroup: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    main: (props) => ({
        color: props.color,
        textShadow: isOutlineRequired(props.color, props.drawerColor)
            ? `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`
            : "unset",
        fontFamily: props.fontFamily,
    }),
    loading: (props) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 30px)",
        width: "25vw",
        fontSize: "2.5rem",
        color: props.color,
        textShadow: isOutlineRequired(props.color, props.drawerColor)
            ? `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`
            : "unset",
    }),
    form: (props) => ({
        fontSize: "100%",
        minWidth: "fit-content",
        maxWidth: "700px",
        "& fieldset": {
            paddingInline: "0.5em",
            paddingBlock: "0",
        },
        "& fieldset fieldset": {
            display: "flex",
            justifyContent: "center",
        },
        "& fieldset fieldset legend": {
            fontSize: "1rem",
        },
        "& select": {
            fontFamily: props.fontFamily || "sans-serif",
            color: props.color,
            textShadow: isOutlineRequired(props.color, props.drawerColor)
                ? `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`
                : "unset",
            height: "50px",
            fontSize: "1rem",
        },
        "& label": {
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            fontSize: "1rem",
        },
        "& legend": {
            textTransform: "uppercase",
            padding: ".25rem .25rem 0 .25rem",
            fontSize: "1.2rem",
        },
    }),
    firstBox: {
        display: "flex",
        justifyContent: "space-evenly",
    },
});

export const FontStyle = React.forwardRef(
    (
        {
            tagType,
            area = "main",
            color = "#000000",
            fontType = "sans-serif",
            fontFamily = "sans-serif",
            setFontFamily = () => {},
            handleColorChange = () => {},
            handleFontTypeChange = () => {},
            drawerColor,
        },
        ref
    ) => {
        const props = { fontFamily, color, tagType, area, drawerColor };
        const classes = useStyles(props);
        const [isLoading, setIsLoading] = React.useState(false);

        React.useEffect(() => {
            document.fonts.onloading = () => {
                setIsLoading(true);
            };
            document.fonts.onloadingdone = () => {
                setIsLoading(false);
            };
        }, []);
        const computedType = tagType === "h" ? "h1,h2,h3,h4,h5,h6" : tagType;
        const visualType = (() => {
            switch (tagType) {
                case "h":
                    return "heading";
                case "p":
                    return "paragraph";
                default:
                    return tagType;
            }
        })();

        return isLoading ? (
            <div className={classes.loading}>
                <p className="rotate-center">Loading</p>
            </div>
        ) : (
            <div ref={ref} className={classes.main}>
                <form className={classes.form}>
                    <fieldset>
                        <legend>Choose your {visualType} styling</legend>
                        <fieldset>
                            <legend>Color</legend>
                            <input
                                type="color"
                                id={`${tagType}-${area}-color`}
                                onChange={handleColorChange}
                                value={color}
                            />
                            <label
                                htmlFor={`${tagType}-${area}-color`}
                                id="colorLabel"
                            >
                                {color.toUpperCase()}
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>Font Type</legend>
                            <div className={classes.radioGroup}>
                                <label
                                    htmlFor={`${tagType}-${area}-fontFamilyDisplay`}
                                >
                                    Display
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Display"
                                        id={`${tagType}-${area}-fontFamilyDisplay`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Display"}
                                    />
                                </label>
                                <label
                                    htmlFor={`${tagType}-${area}-fontFamilyHandwriting`}
                                >
                                    Handwriting
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Handwriting"
                                        id={`${tagType}-${area}-fontFamilyHandwriting`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Handwriting"}
                                    />
                                </label>
                                <label
                                    htmlFor={`${tagType}-${area}-fontFamilyMonospace`}
                                >
                                    Monospace
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Monospace"
                                        id={`${tagType}-${area}-fontFamilyMonospace`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Monospace"}
                                    />
                                </label>
                                <label
                                    htmlFor={`${tagType}-${area}-fontFamilySansSerif`}
                                >
                                    Sans-Serif
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Sans-Serif"
                                        id={`${tagType}-${area}-fontFamilySansSerif`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Sans-Serif"}
                                    />
                                </label>
                                <label
                                    htmlFor={`${tagType}-${area}-fontFamilySerif`}
                                >
                                    Serif
                                    <input
                                        type="radio"
                                        name="fontFamily"
                                        value="Serif"
                                        id={`${tagType}-${area}-fontFamilySerif`}
                                        onChange={handleFontTypeChange}
                                        checked={fontType === "Serif"}
                                    />
                                </label>
                            </div>
                        </fieldset>
                        {fontType && (
                            <FontFamilyPicker
                                selectFontFamily={setFontFamily}
                                fontFamily={fontFamily}
                                fontType={fontType}
                                tagType={tagType}
                                area={area}
                            />
                        )}
                    </fieldset>
                </form>
            </div>
        );
    }
);
