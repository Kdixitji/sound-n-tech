import React from 'react';
import "./TestStyles.css";

const Test = () => {
  return (
    <div className="main">
      <div className="testimonials">
        <input type="radio" name="testimonial" id="input-testimonial1" defaultChecked />
        <input type="radio" name="testimonial" id="input-testimonial2" />
        <input type="radio" name="testimonial" id="input-testimonial3" />
        <div className="testimonials-inner">
          <div className="testimonial">
            <div className="testimonial-photo">
              <div className="photo-background"></div>
              <div className="photo-author"></div>
            </div>
            <div className="testimonial-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque at placerat urna. Phasellus interdum risus sed risus congue viverra. 
                 Fusce vitae massa in quam tincidunt faucibus. Fusce ac efficitur neque, vitae dictum tellus. 
                 Donec luctus arcu id justo consectetur hendrerit. Aliquam at urna sed tortor 
                 efficitur eleifend eu eget ante.</p>
            </div>
            <div className="testimonial-author">Henry Schwengle</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-photo">
              <div className="photo-background"></div>
              <div className="photo-author"></div>
            </div>
            <div className="testimonial-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque at placerat urna. Phasellus interdum risus sed risus congue viverra. 
                 Fusce vitae massa in quam tincidunt faucibus. Fusce ac efficitur neque, vitae dictum tellus. 
                 Donec luctus arcu id justo consectetur hendrerit. Aliquam at urna sed tortor 
                 efficitur eleifend eu eget ante.</p>
            </div>
            <div className="testimonial-author">Mr. George Robert</div>
          </div>
          <div className="testimonial">
            <div className="testimonial-photo">
              <div className="photo-background"></div>
              <div className="photo-author"></div>
            </div>
            <div className="testimonial-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque at placerat urna. Phasellus interdum risus sed risus congue viverra. 
                 Fusce vitae massa in quam tincidunt faucibus. Fusce ac efficitur neque, vitae dictum tellus. 
                 Donec luctus arcu id justo consectetur hendrerit. Aliquam at urna sed tortor 
                 efficitur eleifend eu eget ante.</p>
            </div>
            <div className="testimonial-author">Doodle Wobblepants</div>
          </div>
        </div>
        <div className="testimonials-arrows">
          <div className="arrow arrow-left">
            <label for="input-testimonial1"></label>
            <label for="input-testimonial2"></label>
            <label for="input-testimonial3"></label>
            <span></span>
          </div>
          <div className="arrow arrow-right">
            <label for="input-testimonial1"></label>
            <label for="input-testimonial2"></label>
            <label for="input-testimonial3"></label>
            <span></span>
          </div>
        </div>
        <div className="testimonials-bullets">
          <label for="input-testimonial1">
            <div className="bullet">
              <div>
                <span></span>
              </div>
            </div>
          </label>
          <label for="input-testimonial2">
            <div className="bullet">
              <div>
                <span></span>
              </div>
            </div>
          </label>
          <label for="input-testimonial3">
            <div className="bullet">
              <div>
                <span></span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Test