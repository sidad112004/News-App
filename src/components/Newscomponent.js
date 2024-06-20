import React, { Component } from 'react';
import { Nitems } from './Nitems';


export class Newscomponent extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: []

    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=apple&from=2024-01-13&to=2024-01-13&sortBy=popularity&apiKey=77dd0db6a2474c94b1ca2dcc5c407a09"
    let data=await fetch(url)
    let parsedata= await data.json()
    this.setState({articles: parsedata.articles})

  }
  render() {
    const { articles } = this.state;
  
    return (
      <div>
        <div className="container my-3">
          <h1>Top headline</h1>
          <div className="row">
            {articles && articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Nitems
                  Title={element.title ? element.title.slice(0, 44) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Newscomponent;
