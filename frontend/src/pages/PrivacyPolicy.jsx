import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaLock, FaCookie, FaUserShield, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - Nethaji Vidyalayam</title>
                <meta name="description" content="Privacy Policy for Nethaji Vidyalayam. Learn how we collect, use, and protect your personal information." />
                <meta name="keywords" content="privacy policy, data protection, Nethaji Vidyalayam, personal information" />
            </Helmet>

            <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
                {/* Hero Section */}
                <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center mb-6">
                            <FaShieldAlt className="text-6xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
                        <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                        </p>
                        <p className="text-center text-blue-200 mt-4">
                            Last Updated: January 21, 2026
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-16 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                        {/* Introduction */}
                        <section className="mb-12">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Welcome to Nethaji Vidyalayam. We are committed to protecting your personal information and your right to privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                or interact with our services.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaUserShield className="text-3xl text-blue-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Information We Collect</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>Submit admission enquiry forms</li>
                                        <li>Apply for career opportunities</li>
                                        <li>Contact us through our contact form</li>
                                        <li>Register for events or programs</li>
                                        <li>Subscribe to our newsletter</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mt-3">
                                        This information may include: name, email address, phone number, address, student information,
                                        and any other information you choose to provide.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        When you visit our website, we may automatically collect certain information about your device,
                                        including information about your web browser, IP address, time zone, and some of the cookies
                                        installed on your device. This helps us improve our website and provide better services.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaLock className="text-3xl text-blue-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">How We Use Your Information</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect or receive for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>To process admission enquiries and applications</li>
                                <li>To communicate with parents, students, and prospective families</li>
                                <li>To send administrative information, updates, and newsletters</li>
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To process career applications and recruitment</li>
                                <li>To improve our website and services</li>
                                <li>To send you marketing and promotional communications (with your consent)</li>
                                <li>To protect our services and prevent fraud</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Secure server infrastructure and encrypted data transmission</li>
                                <li>Regular security assessments and updates</li>
                                <li>Restricted access to personal information on a need-to-know basis</li>
                                <li>Staff training on data protection and privacy practices</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                However, please note that no method of transmission over the Internet or electronic storage is 100% secure,
                                and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaCookie className="text-3xl text-blue-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Cookies and Tracking Technologies</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may use cookies and similar tracking technologies to access or store information. Cookies are small
                                data files stored on your device that help us improve our website and your experience.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                                if you do not accept cookies, you may not be able to use some portions of our website.
                            </p>
                        </section>

                        {/* Third-Party Services */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Services</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our website may contain links to third-party websites or services that are not operated by us. We may also
                                use third-party service providers to help us operate our website and deliver our services, such as:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Google Maps for location services</li>
                                <li>Social media platforms (Facebook, Instagram, YouTube)</li>
                                <li>Analytics services to understand website usage</li>
                                <li>Email service providers for communications</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                These third parties have their own privacy policies, and we are not responsible for their practices.
                                We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                As an educational institution, we collect information about students as part of our educational services.
                                We are committed to protecting the privacy of children and comply with applicable laws regarding children's
                                personal information. We only collect student information with parental consent and use it solely for
                                educational and administrative purposes.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Privacy Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You have certain rights regarding your personal information, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>The right to access and receive a copy of your personal information</li>
                                <li>The right to correct or update inaccurate information</li>
                                <li>The right to request deletion of your personal information</li>
                                <li>The right to object to or restrict certain processing of your information</li>
                                <li>The right to withdraw consent where processing is based on consent</li>
                                <li>The right to opt-out of marketing communications</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need
                                your information, we will securely delete or anonymize it.
                            </p>
                        </section>

                        {/* Updates to Policy */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Updates to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                                new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this
                                Privacy Policy periodically.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <div className="flex items-center mb-6">
                                <FaEnvelope className="text-3xl text-blue-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                                please contact us:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Nethaji Vidyalayam</h3>
                                <p className="text-gray-700 mb-2">
                                    <strong>Address:</strong> 10, 1st Main Rd, Babu Nagar, Medavakkam, Chennai - 600100
                                </p>
                                <p className="text-gray-700 mb-2">
                                    <strong>Phone:</strong> +91 9444662737 / 044-22772535
                                </p>
                                <p className="text-gray-700">
                                    <strong>Email:</strong> nethajividhyalayam2016@gmail.com
                                </p>
                            </div>
                        </section>

                        {/* Consent */}
                        <section className="bg-linear-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                            <p className="text-gray-700 leading-relaxed">
                                By using our website and services, you acknowledge that you have read and understood this Privacy Policy
                                and agree to the collection, use, and disclosure of your information as described herein.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
