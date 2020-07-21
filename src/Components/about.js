import React, {useEffect, useState} from "react";

const About = () => {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    (async function getStatus() {
      let serverStatus = await fetch(
        process.env.REACT_APP_API + "v3/anime/1"
      ).then((res) => {
        return res.status.toString();
      });
      //status = status.json();
      setStatus((status) => (status = serverStatus));
    })();
  }, []);

  return (
      <main className="Container About">
        <h1>
        <span role="img" aria-label="narutomaki is a symbol of malendar">
          🍥
        </span>
          malendar
          <span role="img" aria-label="narutomaki is a symbol of malendar">
          🍥
        </span>
        </h1>

        <section>
          <p>
            Malendar is a web-application that allows you to see calendar for
            upcoming (and past) anime releases!
          </p>
        </section>

        <section>Server status: {status}</section>
      </main>
  );
};

export default About;
