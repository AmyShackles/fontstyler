# FontStyler

#### Component to allow users to select their own preferred font family and text color -- 

### Usage Example
```
function App() {
    const [h1Color, setH1Color] = React.useState("#000000");
    const [h1FontType, setH1FontType] = React.useState("cursive");
    const [h1FontFamily, setH1FontFamily] = React.useState(
        "'Bangers', cursive"
    );
    const [h2Color, setH2Color] = React.useState("#000000");
    const [h2FontType, setH2FontType] = React.useState("cursive");
    const [h2FontFamily, setH2FontFamily] = React.useState(
        "'Bangers', cursive"
    );
    const [h3Color, setH3Color] = React.useState("#000000");
    const [h3FontType, setH3FontType] = React.useState("cursive");
    const [h3FontFamily, setH3FontFamily] = React.useState(
        "'Bangers', cursive"
    );
    const [h4Color, setH4Color] = React.useState("#000000");
    const [h4FontType, setH4FontType] = React.useState("cursive");
    const [h4FontFamily, setH4FontFamily] = React.useState(
        "'Bangers', cursive"
    );
    const [h5Color, setH5Color] = React.useState("#000000");
    const [h5FontType, setH5FontType] = React.useState("cursive");
    const [h5FontFamily, setH5FontFamily] = React.useState(
        "'Bangers', cursive"
    );
    const [h6Color, setH6Color] = React.useState("#000000");
    const [h6FontType, setH6FontType] = React.useState("cursive");
    const [h6FontFamily, setH6FontFamily] = React.useState(
        "'Bangers', cursive"
    );

    return (
        <main style={{ background: "rebeccapurple" }}>
            <Drawer>
                <FontStyler
                    area="main"
                    tagType="h1"
                    color={h1Color}
                    setColor={setH1Color}
                    fontType={h1FontType}
                    setFontType={setH1FontType}
                    fontFamily={h1FontFamily}
                    setFontFamily={setH1FontFamily}
                />
                <FontStyler
                    area="main"
                    tagType="h2"
                    color={h2Color}
                    setColor={setH2Color}
                    fontType={h2FontType}
                    setFontType={setH2FontType}
                    fontFamily={h2FontFamily}
                    setFontFamily={setH2FontFamily}
                />
                <FontStyler
                    tagType="h3"
                    color={h3Color}
                    setColor={setH3Color}
                    fontType={h3FontType}
                    setFontType={setH3FontType}
                    fontFamily={h3FontFamily}
                    setFontFamily={setH3FontFamily}
                />
                <FontStyler
                    tagType="h4"
                    color={h4Color}
                    setColor={setH4Color}
                    fontType={h4FontType}
                    setFontType={setH4FontType}
                    fontFamily={h4FontFamily}
                    setFontFamily={setH4FontFamily}
                />
                <FontStyler
                    tagType="h5"
                    color={h5Color}
                    setColor={setH5Color}
                    fontType={h5FontType}
                    setFontType={setH5FontType}
                    fontFamily={h5FontFamily}
                    setFontFamily={setH5FontFamily}
                />
                <FontStyler
                    tagType="h6"
                    color={h6Color}
                    setColor={setH6Color}
                    fontType={h6FontType}
                    setFontType={setH6FontType}
                    fontFamily={h6FontFamily}
                    setFontFamily={setH6FontFamily}
                />
                <FontStyler tagType="script" color="rebeccapurple" />
            </Drawer>
        </main>
    );
}
```