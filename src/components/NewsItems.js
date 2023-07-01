import React from "react";

const NewsItems = (props) => {
  // render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span
            className="badge rounded-pill bg-dark"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          </div>

          <img
            src={!imageUrl? "https://images.hindustantimes.com/tech/img/2023/05/14/cropped/16-9/asteroid_1681212528521_1684061754139.jpg?impolicy=new-ht-20210112&width=1600/": imageUrl
            } className="card-img-top" alt="" />
          {/* <div class="card-header bg-black text-white">SOURCE : {source}</div> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "UNKNOWN"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              READ MORE
            </a>
          </div>
        </div>
        {/* <div className="card text-bg-dark">
  <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/05/14/cropped/16-9/asteroid_1681212528521_1684061754139.jpg?impolicy=new-ht-20210112&width=1600/":imageUrl} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              READ MORE
            </a>
  </div>
</div> */}
      </div>
    );
  // }
}

export default NewsItems;
