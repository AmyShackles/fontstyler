import React from "react";
import { makeStyles } from "@material-ui/styles";
import { isOutlineRequired } from "../utils/colors.js";
import { acceptableTags } from "../utils/tags.js";
import { OpenDrawer } from "./OpenDrawer.js";
import { CloseDrawer } from "./CloseDrawer.js";

const useStyles = makeStyles({
    drawer: (props) => ({
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: props.drawerColor ? props.drawerColor : "white",
    }),
    close: (props) => ({
        display: "flex",
        justifyContent: "flex-end",
        "& button": {
            padding: "15px",
            fontSize: "1.2rem",
            backgroundColor: props.drawerColor ? props.drawerColor : "white",
            border: "none",
        },
        ...props.closeDrawerStyles,
    }),
});

export const Drawer = ({
    drawerColor = "rebeccapurple",
    openDrawerText = "Choose your styles",
    openDrawerStyles = {},
    closeDrawerText = "X",
    closeDrawerStyles = {},
    children,
}) => {
    const validChildren = children
        .filter(({ props }) => acceptableTags.includes(props.tagType))
        .map((child) => {
            return React.cloneElement(child, { drawerColor });
        });

    const childProps = validChildren.map((child) => child.props);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const props = {
        openDrawer,
        drawerColor,
        openDrawerStyles,
        closeDrawerStyles,
    };
    const classes = useStyles(props);
    React.useEffect(() => {
        childProps.forEach(({ tagType, area }) => {
            if (area === undefined) {
                area = "main";
            }
            const savedColor = localStorage.getItem(`${tagType}-${area}-color`);
            const savedFamily = localStorage.getItem(
                `${tagType}-${area}-fontFamily`
            );
            const backgroundColor = window.getComputedStyle(
                document.querySelector(area)
            ).backgroundColor;
            const needsOutline = savedColor
                ? isOutlineRequired(savedColor, backgroundColor)
                : false;
            console.log({ needsOutline });
            if (savedFamily !== null && savedColor !== null) {
                [
                    ...document.querySelector(area).querySelectorAll(tagType),
                ].forEach((val) => {
                    val.style.fontFamily = savedFamily;
                    val.style.color = savedColor;
                    if (needsOutline) {
                        val.style.textShadow = `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`;
                    } else {
                        val.style.textShadow = "unset";
                    }
                });
            } else if (savedFamily !== null) {
                [
                    ...document.querySelector(area).querySelectorAll(tagType),
                ].forEach((val) => {
                    val.style.fontFamily = savedFamily;
                });
            } else if (savedColor !== null) {
                [
                    ...document.querySelector(area).querySelectorAll(tagType),
                ].forEach((val) => {
                    val.style.color = savedColor;
                    if (needsOutline) {
                        val.style.textShadow = `rgb(0 0 0) 0.063rem 0.063rem 0px, rgb(0 0 0) -0.063rem -0.063rem 0px, rgb(0 0 0) 0.063rem -0.063rem 0px, rgb(0 0 0) -0.063rem 0.063rem 0px, rgb(0 0 0) 0.063rem 0.063rem 0px`;
                    } else {
                        val.style.textShadow = "unset";
                    }
                });
            }
        });
    }, [childProps]);
    const handleKeyDown = (e) => {
        if (openDrawer && e.which == 27) {
            setOpenDrawer(!openDrawer);
        }
    };
    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <div>
            {openDrawer ? (
                <div className={classes.drawer}>
                    <div className={classes.close}>
                        <CloseDrawer
                            title="Close"
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                            buttonText={closeDrawerText}
                            styles={closeDrawerStyles}
                        />
                    </div>
                    <div>{validChildren}</div>
                </div>
            ) : (
                <OpenDrawer
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    buttonText={openDrawerText}
                    styles={openDrawerStyles}
                />
            )}
            <h1>H1 example</h1>
            <h2>H2 example</h2>
            <h3>H3 example</h3>
            <h4>H4 example</h4>
            <h5>H5 example</h5>
            <h6>H6 example</h6>
        </div>
    );
};
