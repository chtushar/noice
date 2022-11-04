type ContrastProps = {
    contrast: number;
}

const Contrast = ({ contrast }: ContrastProps) => {
    return (
        <feComponentTransfer>
            <feFuncR type="linear" slope={contrast} intercept={`${-(0.5 * contrast) + 0.5}`}/>
            <feFuncG type="linear" slope={contrast} intercept={`${-(0.5 * contrast) + 0.5}`}/>
            <feFuncB type="linear" slope={contrast} intercept={`${-(0.5 * contrast) + 0.5}`}/>
        </feComponentTransfer>
    )
}

export default Contrast;