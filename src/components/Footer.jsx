import instagramIcon from "../assets/social-network-icon/Instagram.png";
import whatsappIcon from "../assets/social-network-icon/WhatsApp.png";
import youtubeIcon from "../assets/social-network-icon/YouTube.png";
import linkedinIcon from "../assets/social-network-icon/LinkedIn.png";
import facebookIcon from "../assets/social-network-icon/Facebook.png";
import twitterIcon from "../assets/social-network-icon/Twitter.png";

const Footer = () => {
  // Definisi array socialMediaIcons
  const socialMediaIcons = [
    {
      src: instagramIcon,
      alt: "Instagram",
      link: "https://www.instagram.com/",
    },
    { src: whatsappIcon, alt: "WhatsApp", link: "https://www.whatsapp.com/" },
    { src: youtubeIcon, alt: "YouTube", link: "https://www.youtube.com/" },
    { src: linkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com/" },
    { src: facebookIcon, alt: "Facebook", link: "https://www.facebook.com/" },
    { src: twitterIcon, alt: "Twitter", link: "https://www.twitter.com/" },
  ];

  return (
    <div className="bg-yellow-600 text-white py-5">
      <h3 className="text-2xl font-black text-center mb-6">
        KINGDOM BUSINESS COMMUNITY
      </h3>

      {/* Footer Content */}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* KBC Jawa Timur */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">KBC Jawa Timur</h3>
            <p>
              Ruko Palm Square TF 5, Jl. Raya Taman Asri, Palem, Wadungasri,
              Kec. Waru, Kabupaten Sidoarjo, Jawa Timur, 61256
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-center">Our Social Media</h3>
              <div className="flex items-center gap-4">
                {socialMediaIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
            <p>
              <a href="https://wa.me/6285230456789" target="_blank">
                <u>085230456789</u>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Line */}
      <hr className="my-6 border-white" />
      <p className="text-center">Copyright © 2024 Kingdom Business Community</p>
    </div>
  );
};

export default Footer;
