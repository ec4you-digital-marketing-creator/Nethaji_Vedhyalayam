import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaCheckCircle,
  FaShieldAlt,
  FaLock,
  FaPhone,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";
import api, { API_BASE_URL } from "../api/config";
import defaultQrImage from "../images/payment-qr.png"; // Fallback

const PayFees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    phone_number: "",
    grade: "",
    section: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch QR Code on mount
  useEffect(() => {
    const fetchQR = async () => {
      try {
        const response = await api.get("/core/payment-qr/");
        if (response.data) {
          setQrData(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch QR code", err);
      }
    };
    fetchQR();
  }, []);

  useEffect(() => {
    const { student_name, parent_name, phone_number, grade, section } = formData;
    setIsFormValid(
      student_name.trim() !== "" &&
      parent_name.trim() !== "" &&
      phone_number.trim() !== "" &&
      grade.trim() !== "" &&
      section.trim() !== ""
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError(null);

    try {
      await api.post("/core/fee-payments/", formData);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error submitting details", err);
      setError("Failed to submit details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getQRImageUrl = () => {
    if (qrData && qrData.qr_image) {
      // Check if full URL or relative path
      if (qrData.qr_image.startsWith("http")) return qrData.qr_image;
      return `${API_BASE_URL}${qrData.qr_image}`;
    }
    return defaultQrImage;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Pay School Fees
          </h1>
          <p className="text-gray-600 text-lg">
            Complete the form details and click Next to view the payment QR Code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <FaUser className="text-primary" /> Student Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Student Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Parent Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter parent's name"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Grade */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Grade/Class *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select Grade</option>
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Section *
                  </label>
                  <div className="relative">
                    <FaLayerGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="e.g. A"
                    />
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <FaShieldAlt className="text-green-600 shrink-0" size={20} />
                <p className="text-sm text-green-700">
                  Your details are secure. Click below to proceed to payment.
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg text-lg transform transition-all ${isFormValid && !isLoading
                    ? "bg-linear-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white hover:-translate-y-1 cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {isLoading ? "Processing..." : "Next"} <FaArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: Payment QR */}
          <div className="space-y-6 sticky top-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center relative overflow-hidden">
              {!isSubmitted && (
                <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center transition-all duration-500">
                  <FaLock className="text-gray-400 mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">QR Code Locked</h3>
                  <p className="text-gray-500">Please fill the form and click "Next" to reveal the payment QR code.</p>
                </div>
              )}

              <div className={`transition-all duration-500 ${!isSubmitted ? 'filter blur-md opacity-20' : 'filter blur-0 opacity-100'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Scan to Pay</h3>

                <div className="bg-primary/5 p-6 rounded-2xl mb-6 inline-block">
                  <img
                    src={getQRImageUrl()}
                    alt="Payment QR Code"
                    className="w-64 h-64 object-contain rounded-lg shadow-sm mx-auto"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-500 italic">
                    Scan using any UPI app (GPay, PhonePe, Paytm)
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <FaCheckCircle className="text-primary" size={24} />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Instant Receipt</p>
                  <p className="text-xs text-gray-500">Get confirmation immediately</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <FaLock className="text-primary" size={24} />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% encrypted checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFees;
