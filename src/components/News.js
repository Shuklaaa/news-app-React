import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Sports Desk",
      title:
        "Kohli pays touching tribute to mother Saroj, wife Anushka on Mother's Day - Hindustan Times",
      description:
        "Virat Kohli wished his mother Saroj and wife Anushka Sharma on Mother's Day with a touching post on Twitter. | Cricket",
      url: "https://www.hindustantimes.com/cricket/kohli-pays-touching-tribute-to-mother-saroj-and-wife-anushka-on-mothers-day-takes-a-trip-down-memory-lane-with-photos-101684047423669.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/14/1600x900/FwEbNYTacAEC-BX_1684047610758_1684047642133.jpeg",
      publishedAt: "2023-05-14T07:04:03Z",
      content:
        "With everyone celebrating Mother's Day on May 14, fans and celebrities around the world have taken to social media to pay tribute. Even India star Virat Kohli took to Twitter to wish his mother Saroj… [+1601 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "NASA's Perseverance Rover Spots Evidence Of A Turbulent River On Mars - NDTV",
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com/news",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2023-05-14T03:51:13Z",
      content:
        "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world.",
    },
  ];
  constructor() {
    super();
    console.log("HELLO");

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return <div className="col-md-4" key={e.url}>
              <NewsItems
                title={e.title.slice(0, 45)}
                description={e.description.slice(0, 88)}
                imageUrl={e.urlToImage}
                newsUrl={e.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
