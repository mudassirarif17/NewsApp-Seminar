import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./spinner.gif";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    // console.log(parseData);
    let parseData = await data.json()
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={true}
        // loader={<h4>Loading...</h4>}
        loader={<div style={{textAlign : "center"}}><img src={Spinner}/></div>}
      >
        <div className='container mt-5'>
          <h1 className='text-center mb-3'>INews App Top {props.category} Headlines</h1>
          <div className='row'>
            {articles.map((element) => <div className='col-md-3 col-sm-1'>
              <NewsItem element={element} />
            </div>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

export default News
