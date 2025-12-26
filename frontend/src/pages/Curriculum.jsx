import React from 'react';
import { BookOpen, Target, TrendingUp, Award, Users, Globe, CheckCircle, Download } from 'lucide-react';

const Curriculum = () => {
    const pillars = [
        {
            icon: <BookOpen size={32} />,
            title: "Academic Rigor",
            desc: "Challenging, research-based curriculum aligned with CBSE standards."
        },
        {
            icon: <Users size={32} />,
            title: "Character Development",
            desc: "Emphasis on values, ethics, and social responsibility."
        },
        {
            icon: <Globe size={32} />,
            title: "Global Perspective",
            desc: "Exposure to diverse cultures, languages, and worldviews."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Skill-Based Learning",
            desc: "Focus on critical thinking, creativity, and problem-solving."
        }
    ];

    const assessmentFramework = [
        { type: "Formative Assessment", weight: "40%", desc: "Quizzes, Projects, Class Participation" },
        { type: "Summative Assessment", weight: "60%", desc: "Mid-Term & Final Exams" }
    ];

    return (
        <div className="font-sans bg-gray-50">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-purple-600 opacity-95 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>
                <div className="relative z-20 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Curriculum</h1>
                    <p className="text-xl text-gray-200">A Modern, Holistic Approach to Education</p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Educational Philosophy</h4>
                    <h2 className="text-4xl font-bold text-secondary mb-8">Learning for Life</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        At Nethaji Vidyalayam, our curriculum is grounded in the belief that education should not only impart knowledge but also develop character, foster creativity, and prepare students for the challenges of a rapidly changing world. We follow the <strong>CBSE (Central Board of Secondary Education)</strong> framework while integrating innovative teaching methodologies and value-based education.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our approach is student-centered, inquiry-based, and rooted in the principles of constructivism. We aim to cultivate lifelong learners who are curious, compassionate, and confident.
                    </p>
                </div>
            </section>

            {/* Four Pillars */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Four Pillars of Our Curriculum</h2>
                        <p className="text-gray-600">Education that balances intellect, emotion, and ethics.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center group border-t-4 border-primary">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Structure */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Curriculum Structure</h2>
                        <p className="text-gray-600">Comprehensive coverage across all grade levels.</p>
                    </div>
                    <div className="space-y-8">
                        {[
                            {
                                level: "Foundational Stage (Pre-KG - Grade 2)",
                                focus: "Play-based Learning, Phonics, Basic Numeracy, Motor Skills",
                                color: "bg-green-100 border-green-500"
                            },
                            {
                                level: "Preparatory Stage (Grade 3 - 5)",
                                focus: "Core Subjects (Languages, Math, EVS), Discovery Learning, Reading Habits",
                                color: "bg-blue-100 border-blue-500"
                            },
                            {
                                level: "Middle Stage (Grade 6 - 8)",
                                focus: "Subject Specialization (Science, Social Studies), Critical Thinking, Project Work",
                                color: "bg-purple-100 border-purple-500"
                            },
                            {
                                level: "Secondary Stage (Grade 9 - 10)",
                                focus: "CBSE Board Preparation, Electives, Career Guidance, Life Skills",
                                color: "bg-orange-100 border-orange-500"
                            }
                        ].map((stage, index) => (
                            <div key={index} className={`p-6 rounded-xl border-l-4 ${stage.color} flex flex-col md:flex-row items-start md:items-center gap-4`}>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{stage.level}</h3>
                                    <p className="text-gray-600">{stage.focus}</p>
                                </div>
                                <button className="text-primary font-bold hover:underline flex items-center gap-2">
                                    View Details <Target size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Assessment Framework</h2>
                        <p className="text-gray-200">Continuous evaluation for holistic growth.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {assessmentFramework.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                                <Award className="text-primary mb-4" size={32} />
                                <h3 className="text-2xl font-bold mb-2">{item.type}</h3>
                                <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">{item.weight}</span>
                                <p className="text-gray-200">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="font-bold text-lg mb-3">Key Assessment Features:</h4>
                        <ul className="space-y-2">
                            {[
                                "Regular feedback to parents through online portals",
                                "Skill-based assessments for subjects like Art, Music, and PE",
                                "Psychological and aptitude testing for career guidance (Grades 8-10)"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="py-16 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Know More?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Download our detailed curriculum handbook for a comprehensive overview of grade-wise syllabi, learning outcomes, and teaching methodologies.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all">
                        <Download size={20} /> Download Curriculum Handbook
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Curriculum;
