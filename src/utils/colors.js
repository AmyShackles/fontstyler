function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return { r: +r, g: +g, b: +b };
}

// Credit for this should go to kirilloid on StackOverflow
function luminance(r, g, b) {
    let a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function findBackgroundColor(hex) {
    const white = "#ffffff";
    const black = "#000000";
    let textColor = hexToRGB(hex);
    let textLuminance = luminance(textColor.r, textColor.g, textColor.b);
    let whiteLuminance = luminance(255, 255, 255);
    let blackLuminance = luminance(0, 0, 0);
    const textRatioAgainstWhite =
        textLuminance > whiteLuminance
            ? (whiteLuminance + 0.05) / (textLuminance + 0.05)
            : (textLuminance + 0.05) / (whiteLuminance + 0.05);
    const textRatioAgainstBlack =
        textLuminance > blackLuminance
            ? (blackLuminance + 0.05) / (textLuminance + 0.05)
            : (textLuminance + 0.05) / (blackLuminance + 0.05);

    // Prefer to return background that satisfies AAA for small font
    if (textRatioAgainstWhite < 1 / 7) {
        return white;
    } else if (textRatioAgainstBlack < 1 / 7) {
        return black;
    }
    // If that isn't achievable, return background that satisfies AA for small font
    if (textRatioAgainstWhite < 1 / 4.5) {
        return white;
    } else if (textRatioAgainstBlack < 1 / 4.5) {
        return black;
    }
}
