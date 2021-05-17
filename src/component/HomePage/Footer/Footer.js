import React from 'react'
import styled from 'styled-components'
const Footer=()=> {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h3>Resources</h3>
                        <ul className="list-unstyled">
                            <li><a href="">Customer Support</a></li>
                            <li><a href="">Customer Stories</a></li>
                            <li><a href="">Bussiness Resources</a></li>
                            <li><a href="">HelpOnline Review</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <h3>Usefull Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <h3>Contact</h3>
                        <ul className="list-unstyled">
                            <li><a href=""><i className="fas fa-home"/> Help Online PGSHS MohlanWall</a></li>
                            <li><a href=""><i className="fas fa-at"/> helponline@gmail.com</a></li>
                            <li><a href=""><i className="fas fa-phone"/> +92-333-1579872</a></li>
                            <li><a href=""><i className="fas fa-envelope-open"/> helponline@hotmail.com</a></li>
                        </ul>
                    </div>

                    
                </div>
                    <div className="footer-bottom">
                        <p className="text-center">
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