import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer-logo" width={150} height={46} />
          </a>
          <p
            className="mt-6 text-base leading-7 font-montserrat text-white-400 f
          sm:max-w-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            consectetur.
          </p>
          <div
            className="flex items-center
          mt-8 gap-5"
          >
            {socialMedia.map((social) => (
              <div
                className="flex justify-center
              items-center w-12 h-12
              bg-white rounded-full" key={social.alt}
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1
          justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section.title}>
                <h4 className="text-white
                text-2xl font-montserrat font-medium
                mb-6 leading-normal">{section.title}</h4>

                <ul>
                  {section.links.map((link)=>(
                    <a href={link.link} key={link.name}>
                      <li 
                      className="text-white-400
                       mt-3 text-base leading-normal
                       hover:text-slate-gray">
                        {link.name}
                      </li>
                    </a>
                    
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
         

      </div>

      <div className="flex justify-between
          text-white-400 mt-24 max-sm:flex-col
          max-sm:items-center">
            <div className="flex flex-1 justify-start
            items-center gap-2 font-montserrat 
            cursor-pointer">
              <img src={copyrightSign} alt="copyrightSign"
              width={20}
              height={20}
              className="rounded-full m-0"/>
              <p>Copyright. All rights reserved.</p>
            </div>

            <p className="font-montserrat cursor-pointer">
              Terms and Conditions
            </p>


          </div>
    </footer>
  );
};
