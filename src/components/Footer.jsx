import instagramIcon from "../assets/social-network-icon/Instagram.png";
import whatsappIcon from "../assets/social-network-icon/WhatsApp.png";
import youtubeIcon from "../assets/social-network-icon/YouTube.png";
import linkedinIcon from "../assets/social-network-icon/LinkedIn.png";
import facebookIcon from "../assets/social-network-icon/Facebook.png";
import twitterIcon from "../assets/social-network-icon/Twitter.png";

const Footer = () => {
  const socialMediaIcons = [
    {
      src: instagramIcon,
      alt: "Instagram",
      link: "https://www.instagram.com/kbc.id",
    },
    {
      src: whatsappIcon,
      alt: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=62817131257&text&type=phone_number&app_absent=0",
    },
    {
      src: youtubeIcon,
      alt: "YouTube",
      link: "https://www.youtube.com/@suksessejati",
    },
    {
      src: linkedinIcon,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      src: facebookIcon,
      alt: "Facebook",
      link: "https://www.facebook.com/kbcjatim",
    },
    {
      src: twitterIcon,
      alt: "Twitter",
      link: "https://twitter.com/kbcindonesia",
    },
  ];

  return (
    <>
      <div className=" py-5 text-white" style={{ backgroundColor: "#927111" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black">KINGDOM BUSINESS COMMUNITY</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* alamat */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">KBC Jawa Timur</h3>
              <p>
                Ruko Palm Square TF 5, Jl. Raya Taman Asri, Palem, Wadungasri,
                Kec. Waru, Kabupaten Sidoarjo, Jawa Timur, 61256
              </p>
            </div>
            {/* sosial media */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Sosial Media</h3>
              <div className="flex items-center justify-center gap-4">
                {socialMediaIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="transition duration-300 transform hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
            {/* nomer hp */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
              <p>
                <a
                  href="https://wa.me/6285230456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>085230456789</u>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-7 mt-6">
          <hr className="border-gray-300 md:hidden" />
          <p className="text-center">
            Copyright © 2024 Kingdom Business Community
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
