import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
   
const updateNEws = async()=>{
  props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc99b5c102764e64a1ae7fadeb4d3c4a&page=1&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parseddata = await data.json()
    props.setProgress(70)
  setArticles(parseddata.articles);
  settotalResults(parseddata.totalResults);
  setloading(false)
    props.setProgress(100)
}
  
 const capitalizefirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
  document.title = `${capitalizefirstletter(props.category)}-News App`;
  updateNEws();
   
  }, [])
  
 
 
const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc99b5c102764e64a1ae7fadeb4d3c4a&page=${page+1}&pageSize=${props.pageSize}`;
  setpage(page + 1)
  let data = await fetch(url);
  let parseddata = await data.json()
  setArticles(articles.concat(parseddata.articles))
  settotalResults(parseddata.totalResults)
  

};

  
    return (
      <>
      <div className="container my-3">
      <h1 className="text-center" style={{margin:'35px 0px',marginTop: '90px'}}>MyNews - Top  {capitalizefirstletter(props.category)} Headlines</h1>
       {loading &&<Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
            imageurl = {element.urlToImage} 
            newsurl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
      
          </div>
        })}
        </div>
        </div>
    
        </InfiniteScroll>
        </div>
      
        </>
    
      
    )

  }


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category : 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News;
