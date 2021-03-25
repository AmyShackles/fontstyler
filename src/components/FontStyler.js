import React from "react";
import { FontStyle } from "./FontStyle.js";
import { findBackgroundColor, isOutlineRequired } from "../utils/colors";

export const FontStyler = ({
    tagType,
    area = "main",
    color = "#000000",
    setColor = () => {},
    fontType = "sans-serif",
    setFontType = () => {},
    fontFamily = "sans-serif",
    setFontFamily = () => {},
    drawerColor
}) => {
    const ref = React.createRef();
    const computedType = tagType === "h" ? "h1,h2,h3,h4,h5,h6" : tagType;
    React.useEffect(() => {
        const savedColor = localStorage.getItem(`${tagType}-${area}-color`);
        const savedType = localStorage.getItem(`${tagType}-${area}-fontType`);
        const savedFamily = localStorage.getItem(`${tagType}-${area}-fontFamily`);
        const backgroundColor = window.getComputedStyle(
            document.querySelector(area)
        ).backgroundColor;
        const needsOutline = savedColor
            ? isOutlineRequired(savedColor, backgroundColor)
            : false;
        if (savedColor !== null) {
            setColor(savedColor);
        }
        if (savedType !== null) {
            setFontType(savedType);
        }
        if (savedFamily !== null) {
            setFontFamily(savedFamily);
        }
        if (savedFamily !== null && savedColor !== null) {
            [...document.querySelector(area).querySelectorAll(computedType)].forEach(
                (val) => {
                    val.style.fontFamily = savedFamily;
                    val.style.color = savedColor;
                    if (needsOutline) {
                        val.style.textShadow = `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`;
                    } else {
                        val.style.textShadow = "unset";
                    }
                }
            );
        } else if (savedFamily !== null) {
            [...document.querySelector(area).querySelectorAll(computedType)].forEach(
                (val) => {
                    val.style.fontFamily = savedFamily;
                }
            );
        } else if (savedColor !== null) {
            [
                ...document.querySelector(area).querySelectorAll(computedType),
            ].forEach((val) => {
                val.style.color = savedColor;
                if (needsOutline) {
                    val.style.textShadow = `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`;
                } else {
                    val.style.textShadow = "unset";
                }
            });
        }
    });
    const handleColorChange = (e) => {
        setColor(e.target.value);
        localStorage.setItem(`${tagType}-${area}-color`, e.target.value);
    };
    const handleFontTypeChange = (e) => {
        setFontType(e.target.value);
        localStorage.setItem(`${tagType}-${area}-fontType`, e.target.value);
        if (fontType !== e.target.vlue) {
            if (
                e.target.value === "Display" ||
                e.target.value === "Handwriting"
            ) {
                setFontFamily("cursive");
            } else {
                setFontFamily(e.target.value.toLowerCase());
            }
        }
    };
    return (
        <FontStyle
            ref={ref}
            handleColorChange={(e) => handleColorChange(e)}
            handleFontTypeChange={(e) => handleFontTypeChange(e)}
            tagType={tagType}
            area={area}
            color={color}
            fontType={fontType}
            fontFamily={fontFamily}
            setFontFamily={(e) => setFontFamily(e)}
            drawerColor={drawerColor}
        />
    );
};
