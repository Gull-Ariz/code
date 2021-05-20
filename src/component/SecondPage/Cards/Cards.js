import React from 'react';
import './Cards.css';

function Card(props) {
  return (
    <>
        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={props.coverPhoto} alt="coverPhoto" />
          </div>
          <div className="profileImg">
            <img
              src={props.profilePhoto}
              alt="profille Photo"
              height="50"
              width="50"
            />
            <div>
              <h4>
                {props.sellerName}
              </h4>
            </div>
          </div>
          <div className="card-title">
            <a href="https://www.fiverr.com/chhamzayousaf/develop-full-stack-web-apps-in-react-bootstrap-and-aspnet-mvc?context_referrer=guest_homepage&source=inspired_by_recent_views&ref_ctx_id=09df0b6548000017d7228e1000000001&context=recommendation&pckg_id=1&pos=1&is_pro=false&context_alg=recently_viewed" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h4>
              <small>{props.description}</small>
            </h4>
          </div>
        </div>
    </>
  )
}
export default Card;