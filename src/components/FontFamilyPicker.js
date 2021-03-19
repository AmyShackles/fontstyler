import React from "react";
import { DisplayFont } from "./DisplayFont.js";
import { HandwritingFont } from "./HandwritingFont.js";
import { MonospaceFont } from "./MonospaceFont.js";
import { SerifFont } from "./SerifFont.js";
import { SansSerifFont } from "./SansSerifFont.js";

export const FontFamilyPicker = ({
    selectFontFamily,
    fontType,
    fontFamily,
    type,
}) => {
    switch (fontType) {
        case "Display":
            return (
                <div className="fontFamily">
                    <DisplayFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={type}
                    />
                </div>
            );
        case "Handwriting":
            return (
                <div className="fontFamily">
                    <HandwritingFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={type}
                    />
                </div>
            );
        case "Monospace":
            return (
                <div className="fontFamily">
                    <MonospaceFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={type}
                    />
                </div>
            );
        case "Serif":
            return (
                <div className="fontFamily">
                    <SerifFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={type}
                    />
                </div>
            );
        case "Sans-Serif":
            return (
                <div className="fontFamily">
                    <SansSerifFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={type}
                    />
                </div>
            );
        default:
            return null;
    }
};
