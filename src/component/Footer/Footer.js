import React from 'react'
import styled from 'styled-components'
const Footer=()=> {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h3>Footer 1</h3>
                        <ul className="list-unstyled">
                            <li><a href="">first</a></li>
                            <li><a href="">second</a></li>
                            <li><a href="">third</a></li>
                            <li><a href="">fourth</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h3>Footer 1</h3>
                        <ul className="list-unstyled">
                            <li><a href="">first</a></li>
                            <li><a href="">second</a></li>
                            <li><a href="">third</a></li>
                            <li><a href="">fourth</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h3>Footer 1</h3>
                        <ul className="list-unstyled">
                            <li><a href="">first</a></li>
                            <li><a href="">second</a></li>
                            <li><a href="">third</a></li>
                            <li><a href="">fourth</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h3>Footer 1</h3>
                        <ul className="list-unstyled">
                            <li><a href="">first</a></li>
                            <li><a href="">second</a></li>
                            <li><a href="/">third</a></li>
                            <li><a href="">fourth</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; Help Online 2021
                        </p>
                    </div>

            </div>
            </div>          
        </FooterContainer>
    )
}
export default Footer

const FooterContainer=styled.footer`
    .footer-middle{
        background: var(--mainDark);
        color:var(--mainWhite); 
        padding-top: 3rem; 
    }

    .footer-bottom{
        padding-top:3rem;
        padding-bottom:2rem;

    }
    ul li a{
        color:var(--mainLightGray);
    }
    ul li a:hover{
        color:var(--mainWhite);
    }
`;