import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../assets/css/pages.css';

const Home = () => (
    <div>
        <Navbar />
        <Jumbotron phrase="Projects." subtitle="A list of full stack applications and projects that I have worked on" />
        <h3>Full Stack Applications</h3>
        <hr />
        <div className="row">
            <div className="col-md-6">
                <Picture source="../assets/pics/ArtistSavor.png" alt="artistsavor" deployed="https://morning-fortress-86194.herokuapp.com/" />
            </div>
            <div className="col-md-6">
        
            </div>
        </div>
        <h3 className="frontend">Front End Websites</h3>
        <hr />
        <div className="row">
            <div className="col-md-6">
                <Picture source="../assets/pics/ReactPortfolio.png" alt="portfolio" github="" deployed="" />
            </div>
        </div>
        <h3 className="backend">CLI Applications</h3>
        <hr />
        <div className="row">
            <div className="col-md-4">
                <Picture source="../assets/pics/git.png" alt="git" />
            </div>
            <div className="col-md-4">
                <Picture source="../assets/pics/curl.png" alt="curl" />
            </div>
        </div>
        <Footer />
    </div>
);


export default Home;