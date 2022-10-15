import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Articles.css'
import './AllArticles.css'

export default function AllArticles() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(parseInt(useParams().filter));

    useEffect(() => {
        setLoading(true);
        if (filter === 0) {
            let url = '/api/articles/display/100';
            let http = new XMLHttpRequest();

            http.open("GET", url);
            http.send();
            http.onload = () => {
                let d = http.responseText;
                console.log(JSON.parse(d));
                setData(JSON.parse(d));
                setLoading(false);
            }
        }
        else if (filter === 1) {

            let url = '/api/articles/b';
            let http = new XMLHttpRequest();

            http.open("GET", url);
            http.send();
            http.onload = () => {
                let d = http.responseText;
                console.log(JSON.parse(d));
                setData(JSON.parse(d));
                setLoading(false);
            }
        } else if (filter === 2) {

            let url = '/api/articles/s';
            let http = new XMLHttpRequest();

            http.open("GET", url);
            http.send();
            http.onload = () => {
                let d = http.responseText;
                console.log(JSON.parse(d));
                setData(JSON.parse(d));
                setLoading(false);
            }
        } else if (filter === 3) {

            let url = '/api/articles/k';
            let http = new XMLHttpRequest();

            http.open("GET", url);
            http.send();
            http.onload = () => {
                let d = http.responseText;
                console.log(JSON.parse(d));
                setData(JSON.parse(d));
                setLoading(false);
            }
        }
    }, [filter])

    if (loading) {
        return (
            <div className='loader' />
        )
    } else {
        return (
            <div className='allarticles'>
                <a className='tile' href={`artykul/${data[0].id}`}>
                    <div className='article'>
                        <div className='glow-container' id={"glow" + data[0].id.toString()}>
                            <img className='article-glow' src={data[0].main_image} alt='Article'
                                onError={() => { document.getElementById("glow" + data[0].id.toString()).style = "display: none;" }} />
                        </div>
                        <div className='article-title'>
                            <h1>
                                {data[0].title}
                            </h1>
                        </div>
                    </div>
                </a>

                <div className='filter tile'>
                    <button id='f0' className='' onClick={() => { setFilter(0) }}>Wszystkie artykuły</button>
                    <button id='f1' className='' onClick={() => { setFilter(1) }}>Biblioteka</button>
                    <button id='f2' className='' onClick={() => { setFilter(2) }}>Sport</button>
                    <button id='f3' className='' onClick={() => { setFilter(3) }}>Konkursy</button>
                </div>

                {data.slice(1).map((article, ind) => {
                    return (
                        <a key={ind} className='tile' href={`/artykul/${article.id}`}>
                            <div className='article'>
                                <div className='glow-container' id={"glow" + article.id.toString()}>
                                    <img className='article-glow' src={article.main_image} alt='Article'
                                        onError={() => { document.getElementById("glow" + article.id.toString()).style = "display: none;" }} />
                                </div>
                                <div className='article-title'>
                                    <h1>
                                        {article.title}
                                    </h1>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }
}
