import React from "react";
import { serif } from "../utils/fonts.js";
import "../styles/SerifFont.module.css";

export const SerifFont = ({ selectFontFamily, fontFamily, type, area }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-${area}-fontFamily`, e.target.value);
    };

    return (
        <>
            <label>
                Serif Fonts
                <select onChange={handleChange} value={fontFamily}>
                    <option>Choose font</option>
                    {serif.map(({ name, value }, index) => {
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
