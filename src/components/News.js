import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} ~ Haidi News`;
  }

  async updateNews() {
    this.props.setProgress(10);
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);

    let parsedData = await data.json();
    this.props.setProgress(50);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false, // Set loading to false after data is fetched
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    await this.updateNews();
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({ loading: true }); // Set loading to true when fetching more data

   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false, // Set loading to false after fetching more data
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">

          <h1 className="text-center" style={{ marginTop: 70 ,marginBottom:20}}>

            Monkey key News ~ Top{" "}
            {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {this.state.loading && this.state.page === 1 && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imgUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://cdn3.vectorstock.com/i/1000x1000/88/57/cute-happy-smiling-basketball-ball-vector-30418857.jpg"
                        }
                        newsURL={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
