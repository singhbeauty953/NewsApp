import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={
          {display:"flex",
          justifyContent:'end',
          position: 'absolute',
          right:'0'}
          }>
        <span className=" badge rounded-pill bg-danger">{source} </span>
          </div>
          <img src={!imageurl? "https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg": imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
