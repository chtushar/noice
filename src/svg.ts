export type GetSVGArgs = {
    frequency: number;
    octaves: number;
    brightness: number;
    alpha: number;
    contrast: number;
}

export const getSVG = ({
    frequency,
    octaves,
    brightness,
    alpha,
    contrast,
}: GetSVGArgs) => {
    const intercept = (0.5 - contrast / 2).toFixed(2);
    return (`<svg id="noice">
    <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="${frequency}" numOctaves="${octaves}" stitchTiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
        <feComponentTransfer>
            <feFuncR type="linear" slope="${brightness}"></feFuncR>
            <feFuncG type="linear" slope="${brightness}"></feFuncG>
            <feFuncB type="linear" slope="${brightness}"></feFuncB>
            <feFuncA type="linear" slope="${alpha}"></feFuncA>
        </feComponentTransfer>
        <feComponentTransfer>
            <feFuncR type="linear" slope="${contrast}" intercept="${intercept}"/>
            <feFuncG type="linear" slope="${contrast}" intercept="${intercept}"/>
            <feFuncB type="linear" slope="${contrast}" intercept="${intercept}"/>
        </feComponentTransfer>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
</svg>`);
};
