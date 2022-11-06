import React from 'react';
import Prism from 'prismjs';
import { Leva } from 'leva';

const creditLinks = [{
    name: 'Vite',
    url: 'https://vitejs.dev/'
},{
    name: 'Tailwind',
    url: 'https://tailwindcss.com/'
},{
    name: 'Leva',
    url: 'https://leva.pmnd.rs/',
}, {
    name: 'Prism',
    url: 'https://prismjs.com/'
}]

const Content = ({ backgroundSvgString, background }:{ backgroundSvgString: string; background: string }) => {
    const code = React.useRef<HTMLPreElement>(null);

    React.useEffect(() => {
        if (code.current) {
            Prism.highlightAll();
        }
    }, [backgroundSvgString]);

    return (
        <div className="max-w-[800px] my-0 mx-auto">
            <main>
                <div className='flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4'>
                    <h1 className="font-secondary font-bold text-8xl text-white">noice</h1>
                    <a href="https://www.producthunt.com/posts/noice-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-noice&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=366095&theme=dark" alt="noice - Noice&#0032;helps&#0032;generate&#0032;SVG&#0032;filters&#0032;for&#0032;noise&#0032;textures | Product Hunt" style={{width: 250, height: 54 }} width="250" height="54" /></a>
                </div>
                <p className="font-primary font-normal text-neutral-500 text-lg mb-12">Noice helps generate SVG filters for noise textures.</p>
                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
                    <div className="min-h-[320px] h-full rounded-[10px] relative m-0 z-10 overflow-hidden col-span-1 row-start-1 row-end-2" style={{ background }} dangerouslySetInnerHTML={{ __html: backgroundSvgString }} />
                    <pre className="h-full rounded-[10px] relative m-0 scrollbar-hide col-span-1 row-start-3 md:row-start-1 row-end-4 md:row-end-2" style={{ margin: 0 }}>
                        <code ref={code} className="language-html">
                            {backgroundSvgString}
                        </code>
                    </pre>
                    <div className="col-span-1 md:col-span-2 row-start-2 row-end-3">
                        <Leva fill={true} titleBar={{ drag: false, filter: false, title: 'Controls' }} />
                    </div>
                </div>
            </main>

            <footer className='mt-12'>
            <p className="font-primary text-white text-lg">reference:</p>
                <ul className='font-secondary my-4 list-disc text-white pl-4 flex flex-col gap-3'>
                    <li>
                        <a target="_blank" className='italic' href='https://vanseodesign.com/css/filters-to-adjust-brightness-contrast-opacity-and-inversion/'>CSS Filters To Adjust Brightness, Contrast, Opacity, And Inversion</a>
                    </li>
                    <li>
                        <a target="_blank" className='italic' href='https://ui.gallery'>UI gallery</a>
                    </li>
                </ul>
                
                <p className='mt-16 font-primary text-white leading-6'>
                    open sourced at <a className='italic font-secondary text-normal' target="_blank" href='https://github.com/chtushar/noice'>chtushar/noice</a> by <a className='font-secondary text-normal italic' target="_blank" href="https://twitter.com/ctushr">@ctushr</a>
                    <br />
                    created using {' '}
                    {creditLinks.map((link, index) => (
                        <>
                            {index === creditLinks.length - 1 ? ' and ' : (index !== 0 && ', ')}
                            <a className='italic font-secondary text-normal' href={link.url} target="_blank">{link.name}</a>
                        </>
                    ))}
                </p>
            </footer>
        </div>
    )
}

export default Content;