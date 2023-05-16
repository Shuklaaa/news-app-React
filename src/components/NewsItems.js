import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/05/14/cropped/16-9/asteroid_1681212528521_1684061754139.jpg?impolicy=new-ht-20210112&width=1600/":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
