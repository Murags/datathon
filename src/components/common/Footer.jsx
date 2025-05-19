import React from 'react'
import GradientText from './GradientText'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer({ phase1ID, phase2ID, finalEventID }) {
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
            'Instagram': 'https://instagram.com',
            'Discord': 'https://discord.com'
        },
        'Event_Info': {
            'Phase_I': phase1ID,
            'Phase_II': phase2ID,
            'Final_Event': finalEventID,
        }
    }

    const Styles = {
        'footerTitlesStyles': 'text-cyan-800 font-mono',
        'linkContainerStyles': 'flex flex-col text-gray-600 text-[0.85rem] ',
        'linkStyles': 'hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform'
    }

    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-gray-900/80 backdrop-blur-sm border-t border-b border-emerald-500/30 w-screen relative bottom-0 left-0 right-0 shadow-glow mt-8  p-2">
            <div className='flex flex-col md:flex-row  justify-center items-center md:items-start '>
                <div className='flex flex-col md:flex-row md:gap-20 lg:gap-56 justify-center items-start '>
                    {/* Event Info */}
                    <div className='m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Event Info</h5>
                        <div className={Styles.linkContainerStyles}>
                            <ScrollLink
                                smooth={true}
                                duration={500}
                                to={footerContent.Event_Info.Phase_I}
                                className={`${Styles.linkStyles} cursor-pointer`}
                                offset={-100}
                            >
                                Phase I
                            </ScrollLink>
                            <ScrollLink
                                smooth={true}
                                duration={500}
                                to={footerContent.Event_Info.Phase_II}
                                className={`${Styles.linkStyles} cursor-pointer`}
                                offset={-100}
                            >
                                Phase II
                            </ScrollLink>
                            <ScrollLink
                                smooth={true}
                                duration={500}
                                to={footerContent.Event_Info.Final_Event}
                                className={`${Styles.linkStyles} cursor-pointer`}
                                offset={-100}
                            >
                                Awards and Celebrations
                            </ScrollLink>
                        </div>
                    </div>

                    {/* Discover */}
                    <div className='md:mr-8 lg:mr-36 m-2'>
                        <h5 className={Styles.footerTitlesStyles}>Discover</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link to={footerContent.Discover.Contact} className={Styles.linkStyles}>Contact Us</Link>
                            <Link to={footerContent.Discover.About} className={Styles.linkStyles}>About Us</Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-start md:gap-10'>

                    {/* Legal and Compliance */}

                    <div className='m-2 md:ml-20'>
                        <h5 className={Styles.footerTitlesStyles}>Legal and Compliance</h5>
                        <div className={Styles.linkContainerStyles}>
                            <Link to={footerContent.Legal_and_Compliance.Rules_and_Guidelines} className={Styles.linkStyles}>Rules and Guidelines</Link>
                            <Link to={footerContent.Legal_and_Compliance.Terms} className={Styles.linkStyles}>Terms and Conditions</Link>
                            <Link to={footerContent.Legal_and_Compliance.Privacy} className={Styles.linkStyles}>Privacy Policy</Link>
                            <Link to={footerContent.Legal_and_Compliance.Code_of_Conduct} className={Styles.linkStyles}>Code of Conduct</Link>
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
                        href={footerContent.Social.LinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-gray-600 hover:text-[#0077B5] transition-colors duration-200 hover:scale-110 transform"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>

                    {/* Discord */}
                    <a
                        href={footerContent.Social.Discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-gray-600  hover:text-[#5865F2] transition-colors duration-200 hover:scale-110 transform"
                        aria-label="Discord"
                    >
                        <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
                    </a>

                    {/* GitHub */}
                    <a
                        href={footerContent.Social.GitHub}
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
