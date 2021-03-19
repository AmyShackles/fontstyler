import React from "react";
import { handwriting } from "../utils/fonts.js";

export const HandwritingFont = ({ selectFontFamily, fontFamily, type }) => {
    const handleChange = (e) => {
        selectFontFamily(e.target.value);
        localStorage.setItem(`${type}-fontFamily`, e.target.value);
    };

    return (
        <>
            <label>
                Handwriting Fonts
                <select onChange={handleChange} value={fontFamily}>
                    <option>Choose font</option>
                    {handwriting.map(({ name, value }, index) => {
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
