import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              If you want to get in toutch with me, feel free to send me an email.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Mail: <a href='mailto:ville.gust@gmail.com'>{resumeData.gmail}</a></h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}