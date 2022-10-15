import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ArticleView.css'

const http = new XMLHttpRequest();
const http2 = new XMLHttpRequest();

export default function ArticleView() {
    const [data, setData] = useState(0);
    const [fotos, setFotos] = useState(0);
    const [slider, setSlider] = useState(0);
    const [loading, setLoading] = useState(true);
    const [fotosLoading, setFotosLoading] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        const url = `/api/article/${id}`;

        http.open("GET", url);
        http.send();
        http.onreadystatechange = () => {
            let d = http.responseText;
            if (http.readyState === 4) {
                setData(JSON.parse(d)[0]);
                setFotosLoading(true);
            }
        }
    }, []);

    useEffect(() => {
        if (fotosLoading) {
            const url2 = `/api/images/${data.id}`;
            http2.open("GET", url2);
            http2.send();
            http2.onload = () => {
                let d2 = http2.responseText;
                if (d2) {
                    let images = JSON.parse(d2);
                    images.push({ 'img': data.main_image });
                    setFotos(images.reverse());
                    setLoading(false);
                }
            }
        }
        setFotosLoading(false);
    }, [fotosLoading])
    

    useEffect(() => {
        if (!loading) {
            // console.log(slider);
            document.getElementById('slider').style = `transform: translateX(-${slider * 100}%);`;
        }
    }, [slider])

    if (!loading) {
        return (
            <div className='single-article-view tile'>
                <h1>
                    {data.title}
                </h1>
                <div className='article-images'>
                    <div id='slider'>
                        {fotos.map((url, ind) => {
                            return (
                                <div key={ind} className='image-slider'>
                                    <img className='slider-img' src={url.img} alt='article' />
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
                                }} id='btn-r'><i class="fa-solid fa-chevron-right"></i></button>
                            }
                            {slider !== 0 &&
                                <button onClick={() => {
                                    if (slider > 0) {
                                        setSlider(slider - 1);
                                    }
                                }} id='btn-l'><i class="fa-solid fa-chevron-left"></i></button>
                            }
                        </Fragment>
                    }
                </div>

                <p dangerouslySetInnerHTML={{ __html: data.content }}>
                </p>
            </div>
        )
    } else {
        return <div className='loader' />
    }
}
