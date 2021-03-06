import React from "react";
import { monospace } from "../utils/fonts.js";
import "../styles/MonospaceFont.module.css";

export const MonospaceFont = ({ selectFontFamily, fontFamily, type, area }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-${area}-fontFamily`, e.target.value);
    };
    return (
        <>
            <label>
                Monospace Fonts
                <select onChange={handleChange} value={fontFamily}>
                    <option>Choose font</option>
                    {monospace.map(({ name, value }, index) => {
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
