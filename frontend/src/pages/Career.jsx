import React from 'react';
import { Briefcase, Upload } from 'lucide-react';

const Career = () => {
    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="absolute inset-0 bg-primary/80 z-10" />
                <div className="relative z-20 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">Shape the future with us at Nethaji Vidyalayam.</p>
                </div>
            </section>

            {/* Career Inquiry Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-8 border-primary">
                        <div className="flex items-center gap-3 mb-8 text-primary">
                            <Briefcase size={32} />
                            <h2 className="text-3xl font-bold text-secondary">Career Inquiry Form</h2>
                        </div>

                        <form className="space-y-8">
                            {/* Personal Details */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Personal Details</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Name of the Applicant</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter your full name" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Date of Birth (DOB)</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="gender" className="w-5 h-5 text-primary focus:ring-primary" />
                                            <span>Male</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="gender" className="w-5 h-5 text-primary focus:ring-primary" />
                                            <span>Female</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="gender" className="w-5 h-5 text-primary focus:ring-primary" />
                                            <span>Prefer not to say</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Email ID</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="example@email.com" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter your residential address"></textarea>
                                </div>
                            </div>

                            {/* Professional Details */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Professional Details</h3>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Current Position</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="e.g. Senior Teacher" />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Position Applying For</label>
                                    <div className="flex flex-wrap gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                            <span>Teaching</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                            <span>Non-Teaching</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                            <span>Office Administration</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Experience</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                        <option value="">Select Experience Level</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="less_than_1">Less than 1 year</option>
                                        <option value="1_to_5">1–5 years</option>
                                        <option value="above_5">Above 5 years</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Attach Resume</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors text-center cursor-pointer bg-gray-50">
                                        <Upload className="mx-auto text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
