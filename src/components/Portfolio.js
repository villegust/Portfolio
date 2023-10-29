import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                          <img src={item.imgurl}  alt='My work' />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                            <div className="alignment">
                              <div className={`links ${!item.link || !item.linkGithub ? "center-align" : ""}`}>
                                <a href={item.linkGithub} target='_blank' rel="noopener noreferrer">
                                  {item.linkGithub ? <i className='fa fa-github'/> : ""}
                                  {item.linkGithub ? "Github" : ""}
                                </a>
                                <a href={item.link} target='_blank' rel="noopener noreferrer">
                                  {item.link ? <i className="fa fa-external-link" /> : ""}
                                  {item.link ? "Live" : ""}
                                </a>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}