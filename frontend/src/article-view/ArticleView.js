import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ArticleView.css'

const http = new XMLHttpRequest();

export default function ArticleView() {
    const [data, setData] = useState(0);
    const [fotos, setFotos] = useState(0);
    const [loading, setLoading] = useState(0);
    const [slider, setSlider] = useState(0);

    const id = useParams().id;

    useEffect(() => {
        const url = `https://koper.edu.pl/Api/article.php?nr=${id}`;

        http.open("GET", url);
        http.send();
        http.onreadystatechange = () => {
            let d = http.responseText;
            if (http.readyState === 4) {
                // console.log(JSON.parse(d)[0]);
                // console.log(JSON.parse(d)[0].foto.split('_'));
                setData(JSON.parse(d)[0]);
                let f = JSON.parse(d)[0].foto.split('_');
                f.splice(-1);
                setFotos(f);
                setLoading(true);
            }
        }
    }, []);

    useEffect(() => {
        if (loading) {
            // console.log(slider);
            document.getElementById('slider').style = `transform: translateX(-${slider * 100}%);`;
        }
    }, [slider])


    if (loading) {
        return (
            <div className='single-article-view tile'>
                <h1>
                    {data.tytul}
                </h1>
                <div className='article-images'>
                    <div id='slider'>
                        {fotos.map((ind, url) => {
                            return (
                                <div key={url} className='image-slider'>
                                    <img className='slider-img' src={`https://koper.edu.pl/podstrony/page${id}/${ind}`} alt='article' />
                                </div>
                            )
                        })}
                    </div>
                    {fotos.length > 2 &&
                        <div className='slider-dots'>
                            <div className='dots-container'>
                                {fotos.map((url, ind) => {
                                    if (slider === ind) {
                                        return <button key={ind} onClick={() => { setSlider(ind) }} className='active-dot' />
                                    } else {
                                        return <button key={ind} onClick={() => { setSlider(ind) }} />
                                    }
                                })}
                            </div>
                        </div>
                    }
                    {fotos.length > 1 &&
                        <Fragment>
                            {slider !== fotos.length - 1 &&
                                <button onClick={() => {
                                    if (slider < fotos.length - 1) {
                                        setSlider(slider + 1);
                                    }
                                }} id='btn-r'>→	</button>
                            }
                            {slider !== 0 &&
                                <button onClick={() => {
                                    if (slider > 0) {
                                        setSlider(slider - 1);
                                    }
                                }} id='btn-l'>←</button>
                            }
                        </Fragment>
                    }
                </div>

                <p dangerouslySetInnerHTML={{ __html: data.tresc }}>
                </p>
            </div>
        )
    } else {
        return <div className='loader' />
    }
}
