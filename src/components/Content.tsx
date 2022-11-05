import React from 'react';
import Prism from 'prismjs';
import { Leva } from 'leva';


const Content = ({ backgroundSvgString, background }:{ backgroundSvgString: string; background: string }) => {
    const code = React.useRef<HTMLPreElement>(null);

    React.useEffect(() => {
        if (code.current) {
            Prism.highlightAll();
        }
    }, [backgroundSvgString]);

    return (
        <div className="max-w-[800px] my-0 mx-auto">
            <h1 className="font-secondary font-bold text-8xl text-white mb-4">noice</h1>
            <p className="font-primary font-normal text-neutral-500 text-lg mb-12">Noice helps generate SVG filters for noise textures.</p>
            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="min-h-[320px] h-full rounded-[10px] relative m-0 z-10 overflow-hidden col-span-1 row-start-1 row-end-2" style={{ background }} dangerouslySetInnerHTML={{ __html: backgroundSvgString }} />
                <pre className="h-full rounded-[10px] relative m-0 scrollbar-hide col-span-1 row-start-3 md:row-start-1 row-end-4 md:row-end-2" style={{ margin: 0 }}>
                    <code ref={code} className="language-html">
                        {backgroundSvgString}
                    </code>
                </pre>
                <div className="col-span-1 md:col-span-2 row-start-2 row-end-3">
                    <Leva fill={true} titleBar={{ drag: false, filter: false }} collapsed={{ collapsed: false, onChange: () => undefined }} />
                </div>
            </div>
            {/* <p className={}>reference:</p>
            <ul>
                <li>
                    <a href='https://vanseodesign.com/css/filters-to-adjust-brightness-contrast-opacity-and-inversion/'>https://vanseodesign.com/css/filters-to-adjust-brightness-contrast-opacity-and-inversion/</a>
                </li>
            </ul> */}
        </div>
    )
}

export default Content;