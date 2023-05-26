import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="flexslider">
              <ul className="slides">
                {
                  resumeData.testimonials && resumeData.testimonials.map((item) => {
                    return (
                      <li>
                        <blockquote>
                          <img src={`${item.description}`} alt='Python Certification' />
                          <cite><a href={item.link}>Microsoft Technology Associate <br /> Introduction to Programming Using Python</a></cite>
                        </blockquote>
                      </li>
                    )
                  })
                }
              </ul>
            </div> {/* div.flexslider ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
    );
  }
}