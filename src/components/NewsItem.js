import React, { useState , useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsItem = (props) => {
  
  return (
    <>
   <div className='my-1'>
        <div class="card mx-1" style={{ width: "16rem" }}>
          <img class="card-img-top" src={!props.element.urlToImage?"https://media.istockphoto.com/id/1193558441/vector/breaking-news-banner-template-breaking-news-background-for-screensaver-lower-third-red-and.jpg?s=612x612&w=0&k=20&c=ycErMi8WwaM4vicwaCTGTxamSJpq271CdcXGqBTKpPw=":props.element.urlToImage} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.element.title.slice(0 , 44)}</h5>
            <p class="card-text">{props.element.description?props.element.description.slice(0 , 88):null}...</p>
            <a href="#" class="btn btn-primary">ReadMore</a>
          </div>
        </div>
      </div>
      </>
  )
}

export default NewsItem
