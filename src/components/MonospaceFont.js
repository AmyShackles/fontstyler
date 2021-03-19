import React from "react";
import { monospace } from "../utils/fonts.js";

export const MonospaceFont = ({ selectFontFamily, fontFamily, type }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-fontFamily`, e.target.value);
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
