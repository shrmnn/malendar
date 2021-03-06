import React from "react";
import "./Styling/news.css";

const News = () => {
  return (
      <div className="News">
        <h1>What's new?</h1>
        <section>
          <h2>07.20.2020 update</h2>
          <ul>
            <h3>Features: </h3>
            <li>Images are now in webp formats</li>
            <li>Ongoing page (beta)</li>
            <li>Slightly different behaviour of weekdays</li>

            <h3>Bugfixes: </h3>
            <li>Today's date was fixed</li>
            <li>Some visual bug fixes</li>
            <h4>Minor updates: </h4>
            <li>patch _02: Added background image animation for titles</li>
            <li>patch _02: Fixed visual bugs with date menu size</li>
            <li>
              patch _02: Fixed visual bugs with incorrect behaviour on ongoing
              page
            </li>
            <br/>
            <li>patch _03: Added background colorizing for active multititles</li>
            <li>patch _03: Fixed visual bugs with buttons</li>
            <li>
              patch _03: Fixed visual bugs with missing highlighting of 'New
              releases' tab
            </li>
            <li>patch _03: Fixed visual bugs with multititle notificator</li>
            <li>patch _03: Fixed another visual bugs on ongoing page</li>
            <li>patch _03: Fixed visual bugs for touch screen users</li>
            <h3>In nearest future: </h3>
            <li>Correct Ongoing page</li>
            <li>About page</li>
            <li>Light theme</li>
          </ul>
        </section>
        <section>
          <h2>07.17.2020 update</h2>
          <ul>
            <h3>Features: </h3>
            <li>
              <b>Slightly beautiful 404 page</b>
            </li>
            <li>
              Navigation between /yy/mm/ pages should be more correct since now
            </li>
            <li>Random dates should work as intended</li>

            <h3>Bugfixes: </h3>
            <li>Fixed bug with invalid behaviour of multititles (Issue #1)</li>
            <li>Fixed bug with missed days numbers</li>
            <li>Some behaviour with loading/error screen was also fixed</li>
            <h3>In nearest future: </h3>
            <li>Ongoing page</li>
            <li>About page</li>
            <li>Light theme</li>
          </ul>
        </section>
        <section>
          <h2>07.15.2020 update</h2>
          <ul>
            <h3>Features: </h3>
            <li>Implemented header navigation</li>
            <li>Added weekdays and w-d marks</li>
            <li>
              You can open exact date using links: <br/>
              <small>
                https://shrmnn.github.io/malendar/1999/January for example; <br/>
                <del>Doesn't work for random dates (yet)</del>
              </small>
            </li>
            <h3>Bugfixes: </h3>
            <li>Fixed bug with macOS bounce scroll background color</li>
            <li>Fixed bug with incorrect number of days per month</li>
            <h3>In nearest future: </h3>
            <li>Ongoing page</li>
            <li>About page</li>
            <li>
              <del>Slightly beautiful 404 page</del>
            </li>
          </ul>
        </section>
      </div>
  );
};

export default News;
