import React, { useState, useEffect } from 'react'
import './Articles.css'

const url = 'https://koper.edu.pl/Api/articles.php';
const http = new XMLHttpRequest();

export default function AllArticles() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        http.open("GET", url);
        http.send();

        http.onreadystatechange = () => {
            let articles = http.responseText;
            if (http.readyState === 4) {
                setData(JSON.parse(articles));
                console.log(JSON.parse(articles));

                setLoading(false);
            }
        }
    }, [])

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
                            <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${data[0].id}/glow.jpg`} alt='Article'
                                onError={() => { document.getElementById("glow" + data[0].id.toString()).style = "display: none;" }} />
                        </div>
                        <div className='article-title'>
                            <h1>
                                {data[0].tytul}
                            </h1>
                        </div>
                    </div>
                </a>

                <div className='filter tile'>
                    <button id='f0' className='' onClick={() => { }}>Wszystkie artykuły</button>
                    <button id='f1' className='' onClick={() => { }}>Olimpiady konkursy</button>
                    <button id='f2' className='' onClick={() => { }}>Sport w szkole</button>
                    <button id='f3' className='' onClick={() => { }}>Wyjazdy i wycieczki</button>
                </div>

                {data.slice(1).map((article, ind) => {
                    return (
                        <a key={ind} className='tile' href={`artykul/${article.id}`}>
                            <div className='article'>
                                <div className='glow-container' id={"glow" + article.id.toString()}>
                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article'
                                        onError={() => { document.getElementById("glow" + article.id.toString()).style = "display: none;" }} />
                                </div>
                                <div className='article-title'>
                                    <h1>
                                        {article.tytul}
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
