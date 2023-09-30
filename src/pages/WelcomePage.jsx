// import Button from "../components/Button";
import "../App.css";
import cityImage from "../assets/city.jpg";
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <header id="welcome-header">
        <div id="welcome-header-content">
          <h1>Ready for a challenge?</h1>
          <Link id="btn-ctx" to={'/challenge'}>GET STARTED</Link>
        </div>
        <img src={cityImage} alt="city image" id="city-image" />
        <img src={heroImage} alt="superman image" id="hero-image" />
      </header>
      <main id="welcome-content">
        <section>
          <h1>There Is Never Been A Better Time</h1>
          <p>
            with our platform you can set, track and conquer challenges at your
            own pace.Wheather its personal growth, professional achievements or
            just for fun, we've get you covered
          </p>
        </section>
        <section>
          <h1>There is never been a better time</h1>
          <p>
            with our platform you can set, track and conquer challenges at your
            own pace.Wheather its personal growth, professional achievements or
            just for fun, we've get you covered
          </p>
        </section>
        <section>
          <h1>There is never been a better time</h1>
          <p>
            with our platform you can set, track and conquer challenges at your
            own pace.Wheather its personal growth, professional achievements or
            just for fun, we've get you covered
          </p>
        </section>
        <section>
          <h1>There is never been a better time</h1>
          <p>
            with our platform you can set, track and conquer challenges at your
            own pace.Wheather its personal growth, professional achievements or
            just for fun, we've get you covered
          </p>
        </section>
      </main>
    </>
  );
}
