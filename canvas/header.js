import React from 'react';
import { render } from 'react-dom';

function Header() {
        return (
            <section className="hero is-info">
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-right nav-menu" style={{marginRight:20}}>
                                <a className="nav-item is-active">Home</a>
                                <a className="nav-item">About</a>
                                <a className="nav-item">Products</a>
                                
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Taco's</h1>
                        <h2 className="subtitle">Website</h2>
                    </div>
                </div>
            </section>
        );
}

export default Header;