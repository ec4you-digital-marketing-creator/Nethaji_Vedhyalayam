import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* School Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            About Us
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Nethaji Vidyalayam has been in the field of education for over two decades. With a rich experience in moulding the young generation, we provide quality education of international standard with modern technology and state-of-the-art facilities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="flex items-center hover:text-primary transition-colors group">
                                    <ChevronRight size={16} className="text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/admissions" className="flex items-center hover:text-primary transition-colors group">
                                    <ChevronRight size={16} className="text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                    School Timing
                                </Link>
                            </li>
                            <li>
                                <Link to="/academics" className="flex items-center hover:text-primary transition-colors group">
                                    <ChevronRight size={16} className="text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                    Uniform
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="flex items-center hover:text-primary transition-colors group">
                                    <ChevronRight size={16} className="text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                    Attendance
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="flex items-center hover:text-primary transition-colors group">
                                    <ChevronRight size={16} className="text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span className="text-sm text-gray-400">
                                    123 School Street, Education City,<br />
                                    State, Country - 123456
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span className="text-sm text-gray-400">+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span className="text-sm text-gray-400">info@nethajividyalayam.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Map Placeholder */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Find Us
                        </h3>
                        <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            {/* Placeholder for Google Map */}
                            Google Map Embed
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Nethaji Vidyalayam. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
