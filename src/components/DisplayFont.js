import React from "react";
import { display } from "../utils/fonts.js";
import "../styles/DisplayFont.module.css";

export const DisplayFont = ({ selectFontFamily, fontFamily, type, area }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-${area}-fontFamily`, e.target.value);
    };
    return (
        <>
            <label>
                Display Fonts
                <select onChange={handleChange} value={fontFamily}>
                    <option>Choose font</option>
                    {display.map(({ name, value }, index) => {
                        return (
                            <option key={index} value={value} name={name}>
                                {name}
                            </option>
                        );
                    })}
                </select>
            </label>
        </>
    );
};
