import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFileContract, FaGavel, FaExclamationTriangle, FaUserCheck, FaEnvelope } from 'react-icons/fa';

const TermsOfService = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service - Nethaji Vidyalayam</title>
                <meta name="description" content="Terms of Service for Nethaji Vidyalayam. Read our terms and conditions for using our website and services." />
                <meta name="keywords" content="terms of service, terms and conditions, Nethaji Vidyalayam, legal" />
            </Helmet>

            <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50">
                {/* Hero Section */}
                <div className="bg-linear-to-r from-indigo-600 to-indigo-800 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center mb-6">
                            <FaFileContract className="text-6xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms of Service</h1>
                        <p className="text-xl text-center text-indigo-100 max-w-3xl mx-auto">
                            Please read these terms and conditions carefully before using our website and services.
                        </p>
                        <p className="text-center text-indigo-200 mt-4">
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
                                Welcome to Nethaji Vidyalayam's website. These Terms of Service ("Terms") govern your access to and use of
                                our website and services. By accessing or using our website, you agree to be bound by these Terms. If you
                                disagree with any part of these Terms, please do not use our website.
                            </p>
                        </section>

                        {/* Acceptance of Terms */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaUserCheck className="text-3xl text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                                agreement. Additionally, when using particular services, you shall be subject to any posted guidelines or
                                rules applicable to such services.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                If you are using our services on behalf of a minor (student), you represent that you are the parent or
                                legal guardian and have the authority to bind the minor to these Terms.
                            </p>
                        </section>

                        {/* Use of Website */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Use of Website and Services</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Use</h3>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        You may use our website for lawful purposes only. You agree to use the website in accordance with
                                        these Terms and all applicable laws and regulations.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        You agree not to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>Use the website in any way that violates any applicable laws or regulations</li>
                                        <li>Impersonate or attempt to impersonate the school, staff, students, or other users</li>
                                        <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                                        <li>Use any automated system to access the website without our permission</li>
                                        <li>Attempt to gain unauthorized access to any portion of the website</li>
                                        <li>Upload or transmit viruses or any other malicious code</li>
                                        <li>Collect or harvest any personally identifiable information from the website</li>
                                        <li>Use the website for any commercial purpose without our written consent</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* User Accounts */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">User Accounts and Registration</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Certain features of our website may require you to create an account or provide information. When creating
                                an account, you agree to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and promptly update your account information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Accept responsibility for all activities that occur under your account</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                We reserve the right to suspend or terminate your account if any information provided is inaccurate,
                                not current, or incomplete.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaGavel className="text-3xl text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Intellectual Property Rights</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Content</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The website and its entire contents, features, and functionality (including but not limited to all
                                        information, software, text, displays, images, video, and audio, and the design, selection, and
                                        arrangement thereof) are owned by Nethaji Vidyalayam, its licensors, or other providers of such
                                        material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                                        property laws.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Limited License</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        You are granted a limited, non-exclusive, non-transferable license to access and use the website
                                        for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative
                                        works of, publicly display, republish, download, store, or transmit any of the material on our
                                        website without our prior written consent.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Trademarks</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The Nethaji Vidyalayam name, logo, and all related names, logos, product and service names, designs,
                                        and slogans are trademarks of Nethaji Vidyalayam. You may not use such marks without our prior
                                        written permission.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* User Content */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">User-Generated Content</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you submit, post, or transmit any content to our website (such as through forms, comments, or other
                                interactive features), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully
                                sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from,
                                distribute, and display such content.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                You represent and warrant that you own or control all rights to the content you submit and that such
                                content does not violate these Terms or any applicable laws.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section className="mb-12">
                            <div className="flex items-center mb-6">
                                <FaExclamationTriangle className="text-3xl text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Disclaimer of Warranties</h2>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
                                <p className="text-gray-700 leading-relaxed font-semibold mb-2">
                                    IMPORTANT: PLEASE READ CAREFULLY
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Your use of the website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE"
                                    basis. We make no warranties, expressed or implied, regarding the website, including but not limited to:
                                </p>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>The accuracy, reliability, or completeness of any content on the website</li>
                                <li>The availability or uninterrupted access to the website</li>
                                <li>The absence of errors, viruses, or other harmful components</li>
                                <li>The results that may be obtained from the use of the website</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To the fullest extent permitted by applicable law, Nethaji Vidyalayam, its directors, employees, agents,
                                and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Your access to or use of (or inability to access or use) the website</li>
                                <li>Any conduct or content of any third party on the website</li>
                                <li>Any content obtained from the website</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                            </ul>
                        </section>

                        {/* Indemnification */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You agree to defend, indemnify, and hold harmless Nethaji Vidyalayam and its directors, officers, employees,
                                agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs,
                                expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of
                                these Terms or your use of the website.
                            </p>
                        </section>

                        {/* Third-Party Links */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Links and Services</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to third-party websites or services that are not owned or controlled by
                                Nethaji Vidyalayam. We have no control over and assume no responsibility for the content, privacy policies,
                                or practices of any third-party websites or services. You acknowledge and agree that we shall not be
                                responsible or liable for any damage or loss caused by your use of any such content or services.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Governing Law and Jurisdiction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                                its conflict of law provisions.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Any disputes arising out of or relating to these Terms or the use of our website shall be subject to the
                                exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
                            </p>
                        </section>

                        {/* Dispute Resolution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dispute Resolution</h2>
                            <p className="text-gray-700 leading-relaxed">
                                In the event of any dispute, claim, or controversy arising from or relating to these Terms, the parties
                                agree to first attempt to resolve the matter through good faith negotiations. If the dispute cannot be
                                resolved through negotiation within 30 days, either party may pursue legal remedies as permitted by law.
                            </p>
                        </section>

                        {/* Severability */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Severability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, legality,
                                and enforceability of the remaining provisions shall not be affected or impaired in any way.
                            </p>
                        </section>

                        {/* Waiver */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Waiver</h2>
                            <p className="text-gray-700 leading-relaxed">
                                No waiver by Nethaji Vidyalayam of any term or condition set forth in these Terms shall be deemed a further
                                or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure
                                to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Changes to These Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision
                                is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By continuing to access or use our website after those revisions become effective, you agree to be bound
                                by the revised terms. If you do not agree to the new terms, please stop using the website.
                            </p>
                        </section>

                        {/* Entire Agreement */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Entire Agreement</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms, together with our Privacy Policy and any other legal notices published by us on the website,
                                constitute the entire agreement between you and Nethaji Vidyalayam concerning your use of the website.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <div className="flex items-center mb-6">
                                <FaEnvelope className="text-3xl text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>

                            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
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

                        {/* Acknowledgment */}
                        <section className="bg-linear-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
                            <p className="text-gray-700 leading-relaxed">
                                By using our website, you acknowledge that you have read these Terms of Service and agree to be bound by them.
                                If you do not agree to these Terms, please do not use our website.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsOfService;
