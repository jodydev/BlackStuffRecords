export default function Social({ socialLinks }) {
  const socialNames = [
    "Facebook",
    "Instagram",
    "Youtube",
    "Spotify",
    "BandCamp",
    "LinkTree",
  ];

  return (
    <section id="social">
      <div className="container-fluid">
        <div className="row">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className={`${
                socialNames[index] === "Facebook" ||
                socialNames[index] === "Youtube" ||
                socialNames[index] === "BandCamp"
                  ? "bg-semi-dark"
                  : "bg-darkk"
              }  col-12 col-lg-2 d-flex justify-content-center align-items-center`}
            >
              <a className="cursor-pointer" href={link}>
                <span className="position-relative">
                  <img
                    src={`/img/logo-social/${getSocialIcon(index)}.png`}
                  />
              
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function getSocialIcon(index) {
  const socialIcons = [
    "facebook",
    "instagram",
    "youtube",
    "spotify",
    "bandcamp",
    "linktree",
  ];
  return socialIcons[index];
}
