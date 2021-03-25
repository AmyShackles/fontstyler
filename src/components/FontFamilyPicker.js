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
    tagType,
    area,
}) => {
    switch (fontType) {
        case "Display":
            return (
                <div className="fontFamily">
                    <DisplayFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={tagType}
                        area={area}
                    />
                </div>
            );
        case "Handwriting":
            return (
                <div className="fontFamily">
                    <HandwritingFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={tagType}
                        area={area}
                    />
                </div>
            );
        case "Monospace":
            return (
                <div className="fontFamily">
                    <MonospaceFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={tagType}
                        area={area}
                    />
                </div>
            );
        case "Serif":
            return (
                <div className="fontFamily">
                    <SerifFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={tagType}
                        area={area}
                    />
                </div>
            );
        case "Sans-Serif":
            return (
                <div className="fontFamily">
                    <SansSerifFont
                        selectFontFamily={selectFontFamily}
                        fontFamily={fontFamily}
                        type={tagType}
                        area={area}
                    />
                </div>
            );
        default:
            return null;
    }
};
