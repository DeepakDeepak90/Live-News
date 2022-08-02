import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor(props){
    super(props);
    this.state = {
        articles: [],
        loading: false,
        page: 1,

    }
    document.title=`Live-News - ${this.props.category}`
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=869ae4c892ef408a9c6fca34de9eb7f5&page=1`;
  let data=await fetch(url);
let parsedData=await data.json();
console.log(parsedData);
this.setState({articles:parsedData.articles})
}
previouspage = async () => {
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category}&apiKey=869ae4c892ef408a9c6fca34de9eb7f5&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
  })
}
nextPage = async () => {
  console.log("Next");
  if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  }
  else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=869ae4c892ef408a9c6fca34de9eb7f5&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
      })
  }
}
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Live News - Top HeadLine</h1>
        <hr />
        <div className="row ">
        {this.state.articles.map((element)=>{
             return <div className="col md-4 my-3" key={element.url}>
                  <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):"" } imageurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt}  />
            </div>
                })}
        </div> 
        <div className="container d-flex justify-content-between">
        <button type="button"disabled={this.state.page<=1} className="btn btn-info"onClick={this.previouspage} >&larr;Previous</button>
        <button type="button" className="btn btn-info"onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
