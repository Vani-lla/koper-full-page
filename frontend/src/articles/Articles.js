import React, { Component } from 'react'
import './Articles.css'

const url = 'https://koper.edu.pl/Api/articles.php';
const http = new XMLHttpRequest();

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            category: null,
            articleLimit: 19,
            articleFilter: 0
        }
    }

    componentDidMount() {
        http.open("GET", url);
        http.send();

        http.onreadystatechange = () => {
            let data = http.responseText;
            if (http.readyState === 4) {
                for (let i = 0; i < JSON.parse(data).length; i++) {
                    const element = JSON.parse(data)[i];
                    this.state.data.push(element);
                }
                console.log(this.state.data[0])

                this.setState({ loading: false })
            }
        }
    }

    render() {
        if (this.state.loading) {
            return <div><div className='loader' /></div>
        } else {
            return (
                <div className='articles'>
                    {this.state.data.map((article, ind) => {
                        return (
                            <a key={ind} className='tile' href={`artykul/${article.id}`}>
                                <div className='article' id={"article" + article.id.toString()}>
                                    <div className='glow-container' id={"glow" + article.id.toString()}>
                                        <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article'
                                            onError={() => {
                                                document.getElementById("glow" + article.id.toString()).style = "display: none;";
                                                document.getElementById("title" + article.id.toString()).style.transform = 'none';
                                                document.getElementById("article" + article.id.toString()).style.paddingBottom = '1em';
                                            }} />
                                    </div>
                                    <div className='article-title' id={"title" + article.id.toString()}>
                                        <h1>
                                            {article.tytul}
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        );
                    })}

                    <a href='/artykuly' className='see-more tile'>
                        <h1>Zobacz wszystkie artykuły</h1>
                    </a>
                </div>
            )
        }
    }
}
