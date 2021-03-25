import React from "react";

export const OpenDrawer = ({
    openDrawer,
    setOpenDrawer,
    buttonText = "Choose your styles",
    styles = {},
}) => {
    return (
        <button style={styles} onClick={() => setOpenDrawer(!openDrawer)}>
            {buttonText}
        </button>
    );
};
