import React from 'react'
import './Plan.css'
import { useEffect, useState } from 'react'


const http = new XMLHttpRequest();

export default function Plan() {
    const [teachers, setTeachers] = useState(0);
    const [groups, setGroups] = useState(0);
    const [loading, setLoading] = useState(1);


    useEffect(() => {
        const url = `/api/classes/`;

        http.open("GET", url);
        http.send();
        http.onload = () => {
            let d = http.responseText;
            console.log(JSON.parse(d));
            setGroups(JSON.parse(d).classes);
            setTeachers(JSON.parse(d).teachers);
            setLoading(false);
        }
    }, []);


    if (!loading) {
        return (
            <div className='tile central plany'>
                <h1>Plany lekcji</h1>
                <div className='groups-container'>
                    {groups.map((group, ind) => {
                        return (
                            <a key={ind} href={`/plan/g/${group}`}>
                                <div>
                                    {group}
                                </div>
                            </a>
                        )
                    })}
                </div>
                <h1>Nauczyciele</h1>
                <div className='teachers-container'>
                    {teachers.map((teacher, ind) => {
                        return (
                            <a key={ind} className='teacher' href={`/plan/t/${teacher.short}`}>
                                <div className='teacher-short'>{teacher.short}</div>
                                <div className='teacher-full-name'>{teacher.name}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className='loader'></div>
        )
    }

}
