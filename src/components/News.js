import React, {useEffect, useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
  
  const capitalizeFirstLetter =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
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
  // constructor(props) {
    // super(props);

    // this.state = {
    //   articles: [],
    //   loading: false,
    //   page: 1,
    //   totalResults: 0
    // };
    
  // }
  const updateNews = async()=> {
    props.setProgress(10);  //initial progress

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);   //final progress
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  // async componentDidMount() {
  //   // it is a lifecycle method which runs before the render method
  //   // console.log("cdm");
  //   // let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // });
  //   this.updateNews();
  // }

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pageSize}`;
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
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=61472ccaace94da391859b9996c3ea67&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${props.pageSize}`;
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

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    // this.setState({page: this.state.page + 1});
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   // loading: false,
    // });
  };



  // render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
        <div className="row">
          {articles.map((e) => {
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
              Math.ceil(this.state.totalResults / props.pageSize)
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
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
