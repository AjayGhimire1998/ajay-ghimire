import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./intro.css";
import cover from "../../images/cover.gif";
import coverLite from "../../images/cover_lite.gif";
import ppvideo from "../../videos/PortfolioVideo.mp4";
import RotatingBorder from "./RotatingBorder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Intro() {
  const [profileHover, setProfileHover] = useState(false);

  return (
    <section
      className="intro-container"
      onMouseLeave={() => setProfileHover(false)}
    >
      {profileHover ? (
        <ReactPlayer
          url={ppvideo}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
        />
      ) : (
        <div
          className="avatar"
          // style={
          //   {
          // backgroundImage: `url(${cover})`,
          // backgroundSize: "100% 100%",
          //   }
          // }
        >
          <LazyLoadImage
            src={cover}
            placeholderSrc={coverLite}
            effect="blur"
            alt="Ajay Ghimire - Software Developer"
            className="avatar-back"
          />
          <div
            className="avatar-image"
            onMouseEnter={() => setProfileHover(true)}
          >
            <RotatingBorder />
          </div>
        </div>
      )}
      <div className="contents">
        <p>
          I am
          <br />
          <strong>Ajay Ghimire.</strong>
          <br />
          <span>Junior Software Engineer </span>
          <br />
        </p>
        <p className="location">
          <i>
            <svg
              fill="#ffffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 297 297"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M296.618,259.07L265.83,151.174c-1.222-4.279-5.133-7.23-9.583-7.23h-59.824c9.592-16.17,17.056-34.815,17.056-53.711 c0-35.844-29.149-65.002-64.979-65.002S83.521,54.389,83.521,90.232c0,18.896,7.464,37.541,17.056,53.711H40.752 c-4.451,0-8.362,2.951-9.584,7.23L0.382,259.07c-0.857,3.006-0.255,6.24,1.628,8.736c1.883,2.496,4.828,3.963,7.955,3.963h277.068 c3.127,0,6.072-1.467,7.955-3.963C296.873,265.311,297.475,262.076,296.618,259.07z M148.5,45.162 c24.839,0,45.047,20.217,45.047,45.07c0,33.354-31.135,68.475-45.055,82.508c-13.923-14.01-45.039-49.064-45.039-82.508 C103.453,65.379,123.661,45.162,148.5,45.162z M23.173,251.838l25.099-87.963h65.919c13.502,17.488,26.596,29.156,27.722,30.148 c1.883,1.658,4.234,2.486,6.587,2.486c2.352,0,4.704-0.828,6.587-2.486c1.126-0.992,14.22-12.66,27.722-30.148h65.918l25.1,87.963 H23.173z"></path>{" "}
                  <path d="M175.311,90.232c0-14.861-12.027-26.951-26.811-26.951c-14.784,0-26.812,12.09-26.812,26.951 c0,14.859,12.027,26.949,26.812,26.949C163.284,117.182,175.311,105.092,175.311,90.232z M141.62,90.232 c0-3.871,3.086-7.02,6.88-7.02s6.88,3.148,6.88,7.02c0,3.869-3.086,7.018-6.88,7.018S141.62,94.102,141.62,90.232z"></path>{" "}
                  <path d="M230.716,189.668c-2.621,0-5.192,1.066-7.047,2.92c-1.854,1.854-2.919,4.426-2.919,7.047c0,2.621,1.065,5.191,2.919,7.045 c1.855,1.854,4.426,2.92,7.047,2.92s5.192-1.066,7.045-2.92c1.864-1.854,2.921-4.424,2.921-7.045c0-2.621-1.057-5.193-2.921-7.047 C235.909,190.734,233.337,189.668,230.716,189.668z"></path>{" "}
                  <path d="M108.373,191.563c-5.501-0.24-10.154,4.025-10.393,9.518c-0.24,5.5,4.025,10.154,9.517,10.394 c0.15,0.01,0.3,0.01,0.439,0.01c5.312,0,9.727-4.176,9.956-9.527C118.129,196.455,113.865,191.801,108.373,191.563z"></path>{" "}
                  <path d="M82.432,195.338h0.01c-5.202,1.805-7.963,7.475-6.149,12.678c1.425,4.117,5.282,6.707,9.407,6.707 c1.088,0,2.193-0.18,3.27-0.557c5.202-1.805,7.953-7.486,6.148-12.688C93.315,196.275,87.634,193.525,82.432,195.338z"></path>{" "}
                  <path d="M208.063,205.863c-4.604,3.01-5.9,9.188-2.89,13.803c1.913,2.92,5.102,4.506,8.352,4.506c1.873,0,3.767-0.52,5.451-1.625 c4.605-3.02,5.899-9.189,2.88-13.795C218.846,204.139,212.668,202.854,208.063,205.863z"></path>{" "}
                  <path d="M172.286,215.221c-5.441-0.867-10.544,2.842-11.411,8.271c-0.867,5.432,2.84,10.545,8.271,11.412 c0.528,0.08,1.056,0.129,1.574,0.129c4.814,0,9.05-3.498,9.837-8.4C181.414,221.191,177.716,216.088,172.286,215.221z"></path>{" "}
                  <path d="M190.444,214.065h0.01c-5.313,1.455-8.432,6.947-6.967,12.248c1.217,4.426,5.223,7.326,9.597,7.326 c0.878,0,1.765-0.119,2.651-0.359c5.311-1.465,8.432-6.945,6.967-12.258C201.237,215.719,195.755,212.6,190.444,214.065z"></path>{" "}
                  <path d="M133.517,196.994c-5.143-1.984-10.913,0.568-12.896,5.699c-1.983,5.133,0.568,10.904,5.701,12.887 c1.185,0.459,2.401,0.678,3.597,0.678c3.997,0,7.764-2.422,9.298-6.377C141.202,204.746,138.651,198.977,133.517,196.994z"></path>{" "}
                  <path d="M155.134,208.514v-0.01c-4.645-2.939-10.804-1.564-13.754,3.08c-2.95,4.654-1.564,10.813,3.08,13.762 c1.653,1.047,3.508,1.545,5.331,1.545c3.299,0,6.528-1.633,8.432-4.633C161.164,217.613,159.789,211.453,155.134,208.514z"></path>{" "}
                  <path d="M66.277,206.113c-2.62,0-5.192,1.064-7.046,2.918c-1.854,1.855-2.92,4.426-2.92,7.047c0,2.621,1.065,5.193,2.92,7.045 c1.854,1.855,4.426,2.922,7.046,2.922c2.621,0,5.192-1.066,7.046-2.922c1.863-1.852,2.92-4.424,2.92-7.045 c0-2.621-1.057-5.191-2.92-7.047C71.469,207.178,68.908,206.113,66.277,206.113z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            {"  "}Sydney, Australia.
          </i>
        </p>
      </div>
    </section>
  );
}

export default Intro;
