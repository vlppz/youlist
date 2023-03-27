import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { YtVid } from '../Components';
import Head from 'next/head';

export default function Open() {
    const { query } = useRouter();
    const [vidIds, setVidIds] = useState([]);
    const [curIdx, setCurIdx] = useState(0);

    useEffect(() => {
        if (query.vids !== undefined) {
            setVidIds(query.vids.split(','));
        }
    }, [query]);

    function handleNext() {
        let curIdxTmp = curIdx;

        let el = document.getElementById(curIdxTmp.toString());
        el.classList.remove('z-10');

        if (curIdxTmp > vidIds.length - 2) {
            curIdxTmp = -1;
        }

        curIdxTmp += 1;
        el = document.getElementById(curIdxTmp.toString());

        el.classList.add('z-10');

        setCurIdx(curIdxTmp);
    }

    return (
        <main>
            <Head>
                <title>Youlist</title>
                <meta
                    name="description"
                    content="Create and share lists of Youtube videos"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button
                    className="button fixed top-5 right-5 z-20 h-20 w-32 text-2xl font-bold"
                    onClick={handleNext}
                >
                    Next
                </button>
                {vidIds.map((el, idx) => (
                    <YtVid
                        elId={idx}
                        id={el}
                        key={idx}
                        className={
                            idx === 0 ? 'fixed z-10 h-full w-full' : 'fixed h-full w-full'
                        }
                    />
                ))}
            </div>
        </main>
    );
}
