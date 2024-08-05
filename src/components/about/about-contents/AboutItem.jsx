import React from "react";
import "./about-item.css";
import { CgReadme } from "react-icons/cg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Profile({
  title,
  quote,
  desc,
  image,
  placeholderImages,
  isPreviewOn,
  onPreviewClick,
  imageCount,
  onPrevImageClick,
  onNextImageClick,
}) {
  const isEnd = imageCount === image?.length - 1;
  const isStart = imageCount === 0;

  return (
    <section>
      {isPreviewOn ? (
        <div className="about-item-container">
          <div className="about-item preview-image-container">
            <div className="next-image">
              <div>
                <button
                  className="lt"
                  aria-label="Previous Image"
                  onClick={onPrevImageClick}
                  disabled={isStart}
                  style={
                    isStart
                      ? {
                          color: "black",
                          backgroundColor: "rgba(193, 190, 190, 0.7)",
                        }
                      : null
                  }
                >
                  &lt;Prev
                </button>
              </div>
              <figure className="preview-img">
                <LazyLoadImage
                  src={image[imageCount]}
                  placeholderSrc={
                    placeholderImages ? placeholderImages[imageCount] : null
                  }
                  className="preview-image"
                  alt={title}
                  effect="blur"
                />
                <figcaption>{title}</figcaption>
              </figure>
              <div>
                <button
                  className="gt"
                  aria-label="Next Image"
                  onClick={onNextImageClick}
                  disabled={isEnd}
                  style={
                    isEnd
                      ? {
                          color: "black",
                          backgroundColor: "rgba(193, 190, 190, 0.7)",
                        }
                      : null
                  }
                >
                  Next&gt;
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="preview-reverse-container">
            <CgReadme
              size="25px"
              className="preview-button"
              onClick={onPreviewClick}
              aria-label="Toggle Preview"
            />
          </div>
        </div>
      ) : (
        <div className="about-item-container">
          <div className="about-item">
            <h3>
              <span>{title}</span>
            </h3>
            {quote && (
              <blockquote>
                <p>{quote}</p>
              </blockquote>
            )}

            {desc &&
              desc.map((d, index) => {
                return <p key={index}>{d}</p>;
              })}
          </div>
          <br />
          {image ? (
            <div className="preview-button-container">
              <svg
                fill="white"
                viewBox="0 0 16 16"
                height="25px"
                width="25px"
                className="preview-button"
                onClick={onPreviewClick}
                aria-label="Toggle Preview"
              >
                <path d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path d="M14.002 13a2 2 0 01-2 2h-10a2 2 0 01-2-2V5A2 2 0 012 3a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-1.998 2zM14 2H4a1 1 0 00-1 1h9.002a2 2 0 012 2v7A1 1 0 0015 11V3a1 1 0 00-1-1zM2.002 4a1 1 0 00-1 1v8l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l1.777 1.947V5a1 1 0 00-1-1h-10z" />
              </svg>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

export default Profile;
