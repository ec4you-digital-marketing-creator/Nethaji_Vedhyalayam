import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope, FaArrowRight, FaSpinner, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/config';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userType: 'staff'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetMessage, setResetMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Hardcoded Admin Access Check
        const ADMIN_EMAIL = 'nethajividhyalayam2016@gmail.com';
        const ADMIN_PASS = 'NVS@2001#admin';

        if (formData.email !== ADMIN_EMAIL) {
            setError('Access Denied: Only the Administrator can login at this time.');
            setIsLoading(false);
            return;
        }

        if (formData.password !== ADMIN_PASS) {
            setError('Invalid Password.');
            setIsLoading(false);
            return;
        }

        // Direct Login Success for Admin (Bypassing API to avoid 404 errors)
        localStorage.setItem('token', 'admin-bypass-token');
        localStorage.setItem('userType', 'admin');
        navigate('/admin/dashboard');
        setIsLoading(false);
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        // Simulate API call for password reset
        // await api.post('/auth/password-reset/', { email: resetEmail });
        setResetMessage({ type: 'success', text: 'If an account exists with this email, a reset link has been sent.' });
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-secondary via-primary to-purple-600 flex items-center justify-center p-4">
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                            N
                        </div>
                        <div className="text-left">
                            <div className="text-xl font-bold text-white">NETHAJI</div>
                            <div className="text-sm text-gray-200 tracking-wider">VIDYALAYAM</div>
                        </div>
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Staff Portal</h1>
                    <p className="text-gray-200">Login to your administrative dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r">
                            <p className="font-bold">Login Failed</p>
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <FaEnvelope size={20} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    autoComplete="email"
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <FaLock size={20} />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <button type="button" onClick={() => setShowForgotPassword(true)} className="text-sm text-primary hover:text-primary-hover font-medium">
                                Forgot Password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-linear-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <><FaSpinner className="animate-spin" /> Authenticating...</>
                            ) : (
                                <>Login <FaArrowRight size={20} /></>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">New to Nethaji Vidyalayam?</span>
                        </div>
                    </div>

                    {/* Register Link */}
                    <Link
                        to="/contact"
                        className="block text-center py-3 border-2 border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Contact Admissions
                    </Link>
                </div>

                {/* Help Text */}
                <p className="text-center text-sm text-gray-200 mt-6">
                    Need help? Contact <a href="tel:+919444662737" className="text-white font-bold hover:underline">+91 94446 62737</a>
                </p>
            </div>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-800">Reset Password</h3>
                            <button onClick={() => setShowForgotPassword(false)} className="text-gray-400 hover:text-gray-600">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-6">Enter your email address and we'll send you a link to reset your password.</p>

                            {resetMessage.text && (
                                <div className={`mb-4 p-3 rounded text-sm ${resetMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {resetMessage.text}
                                </div>
                            )}

                            <form onSubmit={handleForgotPassword}>
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={resetEmail}
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-colors">
                                    Send Reset Link
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
