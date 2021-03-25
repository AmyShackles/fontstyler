import React from "react";
export const CloseDrawer = ({
    openDrawer,
    setOpenDrawer,
    buttonText = "X",
    styles = {},
    title = "close",
}) => {
    return (
        <button
            style={styles}
            title={title}
            onClick={() => setOpenDrawer(!openDrawer)}
        >
            {buttonText}
        </button>
    );
};
