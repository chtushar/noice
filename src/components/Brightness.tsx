export type BrightnessProps = {
    brightness: number;
    alpha: number;
}

const Brightness = ({ brightness, alpha }: BrightnessProps) => {
    return (
        <feComponentTransfer>
            <feFuncR type="linear" slope={brightness}></feFuncR>
            <feFuncG type="linear" slope={brightness}></feFuncG>
            <feFuncB type="linear" slope={brightness}></feFuncB>
            <feFuncA type="linear" slope={alpha}></feFuncA>
        </feComponentTransfer>
    )
}

export default Brightness;