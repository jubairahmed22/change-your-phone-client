import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse group mt-5">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h1>What are the different ways to manage a state in a React application?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h3>Local state
                        <br />
                        Global state
                        <br />
                        Server state
                        <br />
                        URL state</h3>
                </div>
            </div>
            <div tabIndex={0} className="collapse group mt-5">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h1>How does prototypical inheritance work?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h3>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</h3>
                </div>
            </div>
            <div tabIndex={0} className="collapse group mt-5">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h1>What is a unit test? Why should we write unit tests?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h3>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h3>
                </div>
            </div>
            <div tabIndex={0} className="collapse group mt-5">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h1>Angular vs	React vs	Vue</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <h3>Angular : Initial release: 2010, Official site: angular.io, Current version: 13.x, Used by: Google, Wix</h3>
                    <h3>React : 2013 Initial release: 2010, Official site: reactjs.org	, Current version: 17.x, Used by: Facebook, Uber	</h3>
                    <h3>Vue : Initial release: 201r, Official site: vuejs.org, Current version: 3.x, Used by: Alibaba, GitLab</h3>
                </div>
            </div>
        </div>
    );
};

export default Blog;  