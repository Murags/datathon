import React from 'react'
import GradientText from './GradientText'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const footerContent = {
        'Discover': {
            'About': '',
            'Contact': '',
            'Careers': '',
            'Leaderboard': '',
            'Submission': '',
            'Testimonials': '',
            'Events': '',
            'Sponsors_and_Partners': '',
            'FAQs': '',
            'Blogs': ''
        },
        'Legal_and_Compliance': {
            'Rules_and_Guidelines': '',
            'Terms': '',
            'Privacy': '',
            'Code_of_Conduct': ''
        },
        'Community': {
            'Forum': '',
            'Blogs': '',
            'Events': '',
            'Partners': ''
        },
        'Social': {
            'Twitter': 'https://twitter.com',
            'Facebook': 'https://facebook.com',
            'LinkedIn': 'https://linkedin.com',
            'GitHub': 'https://github.com',
            'Instagram': 'https://instagram.com'
        },
        'Event_Info': {
            'Phase_I': '',
            'Phase_II': '',
            'Awards': ''
        }
    }

    const Styles = {
        'footerTitlesStyles' : 'text-cyan-800 font-mono',
        'linkContainerStyles' : 'flex flex-col text-gray-600 text-[0.85rem] ',
        'linkStyles' : 'hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform'
    }

    const currentYear = new Date().getFullYear();
    
  return (
    <section className="bg-gray-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-md  overflow-hidden shadow-glow terminal-window mt-8 mb-2 p-2"> 
        <div className='flex flex-col md:flex-row  justify-center items-center md:items-start'>
            <div className='flex flex-col md:flex-row md:gap-10 justify-center items-start '>
                    {/* Event Info */}
                    <div className='m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Event Info</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link  to={footerContent.Event_Info.Phase_I} className={Styles.linkStyles}>Phase I</Link>
                            <Link to={footerContent.Event_Info.Phase_II} className={Styles.linkStyles}>Phase II</Link>
                            <Link to={footerContent.Event_Info.Awards} className={Styles.linkStyles}>Awards</Link>
                        </div>
                    </div>

                      {/* Discover */}
                      <div className='m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Discover</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link to={footerContent.Discover.Contact} className={Styles.linkStyles}>Contact Us</Link>
                            <Link to={footerContent.Discover.About} className={Styles.linkStyles}>About Us</Link>
                            <Link to={footerContent.Discover.Careers} className={Styles.linkStyles}>Careers</Link>
                            <Link to={footerContent.Discover.Leaderboard} className={Styles.linkStyles}>Leaderboard</Link>
                            <Link to={footerContent.Discover.Submission} className={Styles.linkStyles}>Submission</Link>
                            <Link to={footerContent.Discover.Testimonials} className={Styles.linkStyles}>Testimonials</Link>
                            <Link to={footerContent.Discover.Events} className={Styles.linkStyles}>Events</Link>
                            <Link to={footerContent.Discover.Sponsors_and_Partners} className={Styles.linkStyles}>Sponsors and Partners</Link>
                            <Link to={footerContent.Discover.FAQs} className={Styles.linkStyles}>FAQs</Link>
                            <Link to={footerContent.Discover.Blogs} className={Styles.linkStyles}>Blogs</Link>
                        </div>
                    </div>         
                </div>

                <div className='flex flex-col md:flex-row justify-center items-start md:gap-10'>
                      
                       {/* Legal and Compliance */}

                    <div className='m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Legal and Compliance</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link to={footerContent.Legal_and_Compliance.Rules_and_Guidelines} className={Styles.linkStyles}>Rules and Guidelines</Link>
                            <Link to={footerContent.Legal_and_Compliance.Terms} className={Styles.linkStyles}>Terms and Conditions</Link>
                            <Link to={footerContent.Legal_and_Compliance.Privacy} className={Styles.linkStyles}>Privacy Policy</Link>
                            <Link to={footerContent.Legal_and_Compliance.Code_of_Conduct} className={Styles.linkStyles}>Code of Conduct</Link>
                        </div>
                    </div>

                        {/* Community */}

                    <div className='m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Community</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link to={footerContent.Community.Forum} className={Styles.linkStyles}>Forum</Link>
                            <Link to={footerContent.Community.Blogs} className={Styles.linkStyles}>Blog</Link>
                            <Link to={footerContent.Community.Events} className={Styles.linkStyles}>Events</Link>
                            <Link to={footerContent.Community.Partners} className={Styles.linkStyles}>Partners</Link>
                        </div>
                    </div>
                </div>
        </div>

                {/* Socials */}

        <div className='flex flex-col m-4 items-center justify-center'>
            <h5 className={Styles.footerTitlesStyles}>Socials</h5>
            <div className="flex space-x-4 mt-2">

                {/* Twitter */}
                <a
                    href={footerContent.Social.Twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Twitter"
                >
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>

                {/* Facebook */}

                <a
                    href={footerContent.Social.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>

                {/* Instagram */}

                <a
                    href={footerContent.Social.Instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>

                {/* LinkedIn */}

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600 hover:text-[#0077B5] transition-colors duration-200 hover:scale-110 transform"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>

                {/* Discord */}
                <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600  hover:text-[#5865F2] transition-colors duration-200 hover:scale-110 transform"
                    aria-label="Discord"
                >
                    <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600  hover:text-[#181717]  dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110 transform"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
             </div>
            
        </div>
        <GradientText className="font-mono mb-2 text-center text-[0.8rem]">
           <span>Datathon</span>
           <span> &copy;</span>
           <span> {currentYear}.</span>
           <span>All rights reserved.</span>
        </GradientText>
        
    </section>
  )
}

export default Footer