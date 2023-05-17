import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // articles = [
  //   {
  //     source: { id: null, name: "Hindustan Times" },
  //     author: "HT Sports Desk",
  //     title:
  //       "Kohli pays touching tribute to mother Saroj, wife Anushka on Mother's Day - Hindustan Times",
  //     description:
  //       "Virat Kohli wished his mother Saroj and wife Anushka Sharma on Mother's Day with a touching post on Twitter. | Cricket",
  //     url: "https://www.hindustantimes.com/cricket/kohli-pays-touching-tribute-to-mother-saroj-and-wife-anushka-on-mothers-day-takes-a-trip-down-memory-lane-with-photos-101684047423669.html",
  //     urlToImage:
  //       "https://www.hindustantimes.com/ht-img/img/2023/05/14/1600x900/FwEbNYTacAEC-BX_1684047610758_1684047642133.jpeg",
  //     publishedAt: "2023-05-14T07:04:03Z",
  //     content:
  //       "With everyone celebrating Mother's Day on May 14, fans and celebrities around the world have taken to social media to pay tribute. Even India star Virat Kohli took to Twitter to wish his mother Saroj… [+1601 chars]",
  //   },
  //   {
  //     source: { id: null, name: "NDTV News" },
  //     author: null,
  //     title:
  //       "NASA's Perseverance Rover Spots Evidence Of A Turbulent River On Mars - NDTV",
  //     description:
  //       "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
  //     url: "https://www.ndtv.com/news",
  //     urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
  //     publishedAt: "2023-05-14T03:51:13Z",
  //     content:
  //       "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world.",
  //   },
  // ];
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  async updateNews() {
    this.props.setProgress(10);  //initial progress

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);   //final progress
  }

  async componentDidMount() {
    // it is a lifecycle method which runs before the render method
    // console.log("cdm");
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   // console.log(parsedData);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false
  //   //   });
  //   // console.log("next");
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };



  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
        <div className="row">
          {this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItems
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; PREVIOUS
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            NEXT &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
