import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './PlanView.css'

const http = new XMLHttpRequest()

export default function PlanView() {
    const id = useParams().id;
    const t = useParams().t;

    const days = ['Pon', 'Wt', 'Śr', 'Cz', 'Pt']

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        if (t === 't') {
            http.open('GET', `/api/plan/teacher/${id}`);
        } else {
            http.open('GET', `/api/plan/${id}`);
        }

        http.send()
        http.onreadystatechange = () => {
            let d = http.responseText;
            if (http.readyState === 4) {
                if (d) {
                    console.log(JSON.parse(d).plan);
                    setData(JSON.parse(d).plan);
                    setLoading(false);
                }
            }
        }
    }, [])

    if (!loading) {
        if (t === 't') {
            return (
                <div className='central tile'>
                    <div className='lesson-plan'>
                        <div>
                            <div className='plan-tag'>Nr.</div>
                            <div className='plan-n plan-background'><div>0</div></div>
                            <div className='plan-n'><div>1</div></div>
                            <div className='plan-n plan-background'><div>2</div></div>
                            <div className='plan-n'><div>3</div></div>
                            <div className='plan-n plan-background'><div>4</div></div>
                            <div className='plan-n'><div>5</div></div>
                            <div className='plan-n plan-background'><div>6</div></div>
                            <div className='plan-n'><div>7</div></div>
                            <div className='plan-n plan-background'><div>8</div></div>
                            <div className='plan-n'><div>9</div></div>
                            <div className='plan-n plan-background'><div>10</div></div>
                        </div>
                        {data.map((lessons, ind) => {
                            return (
                                <div key={ind} className='lesson-day'>
                                    <div className='plan-tag'>{days[ind]}</div>
                                    {lessons.map((lesson, ind) => {
                                        if (ind % 2 === 0) {
                                            if (lesson.active) {
                                                return (
                                                    <div key={ind} className='lesson-t plan-background'>
                                                        <div><div>{lesson.group}</div></div>
                                                        <div><div>{lesson.classroom}</div></div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={ind} className='lesson-n plan-background' />
                                                )
                                            }
                                        } else {
                                            if (lesson.active) {
                                                return (
                                                    <div key={ind} className='lesson-t'>
                                                        <div><div>{lesson.group}</div></div>
                                                        <div><div>{lesson.classroom}</div></div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={ind} className='lesson-n' />
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            )

                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='central tile'>
                    <div className='lesson-plan'>
                        <div>
                            <div className='plan-tag'>Nr.</div>
                            <div className='plan-n plan-background'><div>0</div></div>
                            <div className='plan-n'><div>1</div></div>
                            <div className='plan-n plan-background'><div>2</div></div>
                            <div className='plan-n'><div>3</div></div>
                            <div className='plan-n plan-background'><div>4</div></div>
                            <div className='plan-n'><div>5</div></div>
                            <div className='plan-n plan-background'><div>6</div></div>
                            <div className='plan-n'><div>7</div></div>
                            <div className='plan-n plan-background'><div>8</div></div>
                            <div className='plan-n'><div>9</div></div>
                            <div className='plan-n plan-background'><div>10</div></div>
                        </div>
                        {data.map((lessons, ind) => {
                            return (
                                <div key={ind} className='lesson-day'>
                                    <div className='plan-tag'>{days[ind]}</div>
                                    {lessons.map((lesson, ind) => {
                                        if (ind % 2 === 0) {
                                            if (lesson.active) {
                                                return (
                                                    <div key={ind} className='lesson-g plan-background'>
                                                        <div><div>{lesson.lesson}</div></div>
                                                        <div><div>{lesson.classroom}</div></div>
                                                        <div><div>{lesson.teacher}</div></div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={ind} className='lesson-n plan-background' />
                                                )
                                            }
                                        } else {
                                            if (lesson.active) {
                                                return (
                                                    <div key={ind} className='lesson-g'>
                                                        <div><div>{lesson.lesson}</div></div>
                                                        <div><div>{lesson.classroom}</div></div>
                                                        <div><div>{lesson.teacher}</div></div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={ind} className='lesson-n' />
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    } else {
        return <div className='loading' />
    }
}