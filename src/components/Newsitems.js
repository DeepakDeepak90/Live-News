import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,publishedAt}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3WOEVCADHYI63C7LFNHEQGYVAA.jpg&w=1440":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} On {publishedAt}</small></p>
    <a href={newsurl}  className="btn btn-sm btn-primary"rel="noreferrer" target="_blank">Read More...</a>
  </div>
</div>
      </div>
    )
  }
}
