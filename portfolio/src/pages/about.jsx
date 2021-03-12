import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../assets/css/pages.css';

const App = () => (
    <div>
        <Navbar />
        <Jumbotron phrase="A little bit about me..." subtitle="From the service industry to web development" />
        <h3>My Story</h3>
        <hr />
        <div className="row">
            <div className="col-md-6 aboutSections">
                <img className="profilePic profilePic1" src="../assets/pics/myself.jpg" alt="profilepic" />
            </div>
            <div className="col-md-6 aboutSections">
                <h4 className="bio bio1">
                    okie
                </h4>
            </div>
        </div>
        <h3 className="skills">My Skills</h3>
        <hr />
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm-6">
                        <IconImage source="../assets/pics/html.png" alt="html" />
                        <IconImage source="../assets/pics/bootstrap.png" alt="bootstrap" />
                        <IconImage source="../assets/pics/css.png" alt="css" />
                    </div>
                    <div className="col-sm-6">
                        <IconImage source="../assets/pics/githubIcon.png" alt="github" />
                        <IconImage source="../assets/pics/handlebars.png" alt="handlebars" />
                        <IconImage source="../assets/pics/javascript.png" alt="javascript" />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm-6">
                        <IconImage source="../assets/pics/jquery.png" alt="jquery" />
                        <IconImage source="../assets/pics/mern.jpg" alt="mern" />
                        <IconImage source="../assets/pics/mongodb.png" alt="mongodb" />
                    </div>
                    <div className="col-sm-6">
                        <IconImage source="../assets/pics/mysql.png" alt="mysql" />
                        <IconImage source="../assets/pics/nodejs.png" alt="node" />
                        <IconImage source="../assets/pics/React.png" alt="react" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        
    </div>
);

export default App;
        