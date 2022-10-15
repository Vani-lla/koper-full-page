import { Fragment } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import RightDesktop from './rightDesktop/rightDesktop';
import Articles from './articles/Articles';
import ArticleView from './article-view/ArticleView';
import Recrutation from './recrutation/Recrutation';
import History from './subpages/History';
import Dyrekcja from './subpages/Dyrekcja';
import Pedagog from './subpages/Pedagog';
import RadaR from './subpages/RadaR';
import SamoR from './subpages/SamoR';
import Kontakty from './subpages/Kontakty';
import Kalendarz from './subpages/Kalendarz';
import Nauczyciel from './subpages/Nauczyciel';
import Uczen from './subpages/Uczen';
import AllArticles from './articles/AllArticles';
import Erasmus from './subpages/Erasmus';
import Plan from './plan/Plan';
import PlanView from './plan/PlanView';

function App() {
    return (
        <BrowserRouter basename=''>
            <Routes>
                <Route path='' element={
                    <Fragment>
                        <div className='main'>
                            <Articles />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/artykul/:id' element={
                    <Fragment>
                        <div className='main'>
                            <ArticleView />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/artykuly/:filter' element={
                    <Fragment>
                        <AllArticles />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/rekrutacja' element={
                    <Fragment>
                        <div className='main'>
                            <Recrutation />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/erasmus' element={
                    <Fragment>
                        <div className='main'>
                            <Erasmus />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/historia' element={
                    <Fragment>
                        <div className='main'>
                            <History />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/grono' element={
                    <Fragment>
                        <div className='main'>
                            <Dyrekcja />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/pedagog' element={
                    <Fragment>
                        <div className='main'>
                            <Pedagog />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/radarodzicuf' element={
                    <Fragment>
                        <div className='main'>
                            <RadaR />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/samorzad' element={
                    <Fragment>
                        <div className='main'>
                            <SamoR />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/biblioteka' element={
                    <Fragment>
                        <div className='main'>
                            <SamoR />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/kontakty' element={
                    <Fragment>
                        <div className='main'>
                            <Kontakty />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>


                <Route path='/kalendarz' element={
                    <Fragment>
                        <div className='main'>
                            <Kalendarz />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/deklaracjadost' element={
                    <Fragment>
                        <div className='main'>
                            <Kalendarz />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/nauczyciel' element={
                    <Fragment>
                        <div className='main'>
                            <Nauczyciel />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/uczen' element={
                    <Fragment>
                        <div className='main'>
                            <Uczen />
                            <RightDesktop />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/plany' exact element={
                    <Fragment>
                        <div className='main'>
                            <RightDesktop />
                            <Plan />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/plan/:t/:id' element={
                    <Fragment>
                        <div className='main'>
                            <RightDesktop />
                            <PlanView />
                            <Badges />
                        </div>
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='*' element={
                    <Fragment>
                        <div className='e404 tile'>
                            <h1>
                                Kurka wodna, jasny patyk
                            </h1>
                            <h2>
                                Tu nic nie ma
                            </h2>
                        </div>
                    </Fragment>
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;