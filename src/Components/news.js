import React from "react";
import "./Styling/news.css";

const News = () => {
  return (
      <div className="News">
        <h1>What's new?</h1>
        <section>
          <h2>07.15.2020 update</h2>
          <ul>
            <h3>Features: </h3>
            <li>Implemented header navigation</li>
            <li>Added weekdays and w-d marks</li>
            <li>
              You can open strict date using links: <br/>
              <small>
                https://shrmnn.github.io/malendar/1999/January for example; <br/>
                Doesn't work for random dates (yet)
              </small>
            </li>
            <h3>Bugfixes: </h3>
            <li>Fixed bug with macOS bounce scroll background color</li>
            <li>Fixed bug with incorrect number of days per month</li>
            <h3>In nearest future: </h3>
            <li>Ongoing page</li>
            <li>About page</li>
            <li>Slightly beautiful 404 page</li>
          </ul>
        </section>
      </div>
  );
};

export default News;
