import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/">
          <Logo />
        </Link>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span>App
          </h1>
          <p>
            Introducing Jobify: Your Personal Job Application Manager Jobify
            takes the hassle out of job application tracking by providing you
            with a seamless and efficient way to organize and monitor all your
            job applications in one place. With our intuitive app, you can
            easily input essential information about each job you apply for,
            including the job title, company, application status, and key dates.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
