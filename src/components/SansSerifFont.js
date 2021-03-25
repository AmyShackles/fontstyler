import React from "react";
import { sansSerif } from "../utils/fonts.js";
import "../styles/SansSerifFont.module.css";

export const SansSerifFont = ({ selectFontFamily, fontFamily, type, area }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-${area}-fontFamily`, e.target.value);
    };
    return (
        <>
            <label>
                Sans-Serif Fonts
                <select onChange={handleChange} value={fontFamily}>
                    <option>Choose font</option>
                    {sansSerif.map(({ name, value }, index) => {
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
