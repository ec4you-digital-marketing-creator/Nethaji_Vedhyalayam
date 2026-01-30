import React, { useState, useEffect } from 'react';
import Logo from '../images/BgRemoveLogo.png';

const FeeReceiptGenerator = () => {
    const [formData, setFormData] = useState({
        receiptNo: '651',
        studentName: '',
        standard: '',
        section: '',
        termFee: '',
        fine: '',
        vanFee: '',
        admissionFee: '',
        specialFee: '',
        extraFee: '',
        logoUrl: 'https://via.placeholder.com/60x60/1e3a8a/ffffff?text=NV',
        clerkSignatureUrl: ''
    });

    const [receiptDate, setReceiptDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setReceiptDate(now.toLocaleDateString('en-US', options));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const splitAmount = (amount) => {
        if (!amount || isNaN(amount)) return { rupees: '', paise: '' };
        const parts = parseFloat(amount).toFixed(2).split('.');
        return {
            rupees: parseInt(parts[0]).toLocaleString(),
            paise: parts[1] || '00'
        };
    };

    const calculateTotal = () => {
        const fees = [
            parseFloat(formData.termFee || 0),
            parseFloat(formData.fine || 0),
            parseFloat(formData.vanFee || 0),
            parseFloat(formData.admissionFee || 0),
            parseFloat(formData.specialFee || 0),
            parseFloat(formData.extraFee || 0)
        ];
        return fees.reduce((sum, fee) => sum + fee, 0);
    };

    const total = calculateTotal();
    const totalSplit = splitAmount(total);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Styles for fonts and layout */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
          
          .font-crimson { font-family: 'Crimson Text', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-15deg);
            pointer-events: none;
            z-index: 0;
          }
          
          .watermark img {
            width: 900px;
            height: 900px;
            object-fit: contain;
            opacity: 0.45;
          }
          
          @media print {
            @page {
              size: A4;
              margin: 10mm;
            }
            body { 
              background: white !important; 
              margin: 0; 
              padding: 0;
            }
            .no-print { display: none !important; }
            .print-receipt { 
              padding: 0 !important; 
              margin: 0 !important; 
              width: 100% !important;
              max-width: none !important;
              box-shadow: none !important;
              background: white !important;
              transform: scale(0.98);
              transform-origin: top center;
            }
            .max-w-6xl { max-width: 100% !important; padding: 0 !important; }
            
            /* Ensure the receipt card itself takes full height if needed */
            .printable-card {
              height: auto;
              min-height: 270mm; /* A4 is ~297mm */
              display: flex;
              flex-direction: column;
            }
          }
        `}
            </style>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">

                {/* Form Section */}
                <div className="lg:w-1/3 no-print bg-white p-6 rounded-2xl shadow-lg h-fit sticky top-8">
                    <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b pb-2">Receipt Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Receipt No.</label>
                            <input type="text" name="receiptNo" value={formData.receiptNo} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Student Name</label>
                            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Std.</label>
                                <input type="text" name="standard" value={formData.standard} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Sec.</label>
                                <input type="text" name="section" value={formData.section} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="border-t pt-4 mt-4">
                            <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Fees (Rupees)</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['termFee', 'fine', 'vanFee', 'admissionFee', 'specialFee', 'extraFee'].map(field => (
                                    <div key={field}>
                                        <label className="block text-xs font-medium text-gray-600 capitalize">{field.replace('Fee', ' Fee')}</label>
                                        <input type="number" name={field} value={formData[field]} onChange={handleChange} placeholder="0.00" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                onClick={() => window.print()}
                                className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                Print Receipt
                            </button>
                        </div>
                    </div>
                </div>

                {/* Receipt Preview Section */}
                <div className="lg:w-2/3 print-receipt">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden print-receipt printable-card">
                        {/* Removed Header with Logo as per request */}

                        <div className="bg-white px-8 pt-1 pb-2 flex flex-col items-center justify-center text-center border-b border-blue-50 relative overflow-hidden">
                            {/* Logo */}
                            <div className="relative">
                                <img src={Logo} alt="School Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-md" />
                            </div>

                            {/* School Name & Tagline */}
                            <div className="space-y-2 mt-0">
                                <h1 className="font-crimson text-4xl md:text-6xl text-blue-900 font-bold italic tracking-tighter leading-none">
                                    Nethaji Vidhyalayam
                                </h1>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="h-0.5 w-12 md:w-20 bg-yellow-500 rounded-full opacity-60"></div>
                                    <p className="text-yellow-600 font-bold text-xs md:text-xl uppercase tracking-[0.3em] font-inter">
                                        Empowering Young Minds
                                    </p>
                                    <div className="h-0.5 w-12 md:w-20 bg-yellow-500 rounded-full opacity-60"></div>
                                </div>
                            </div>
                        </div>

                        {/* Removed Metadata (Generated on and Student Copy) as per request */}

                        {/* Receipt Card Content */}
                        <div className="px-6 pb-4 pt-2">
                            <div className="border-4 border-blue-900 rounded-2xl p-4 relative overflow-hidden bg-white">
                                {/* Watermark */}
                                <div className="watermark">
                                    <img src={Logo} alt="Watermark" />
                                </div>

                                {/* Recognition Header */}
                                <div className="bg-blue-900 text-white px-4 py-1.5 rounded-lg flex justify-between items-center mb-4 relative z-10 text-[9px] md:text-xs">
                                    <span className="font-medium tracking-wide">RECOGNIZED BY GOVT. OF TAMIL NADU</span>
                                    <span>PH: 944668279 | 044-22772855</span>
                                    <div className="bg-white text-blue-900 px-2 py-0.5 rounded font-bold uppercase text-[8px]">
                                        Office Copy
                                    </div>
                                </div>

                                {/* School Info */}
                                <div className="text-center mb-4 relative z-10">
                                    <h3 className="font-crimson text-2xl text-blue-900 font-bold italic">Nethaji Vidhyalayam</h3>
                                    <p className="text-yellow-600 font-semibold text-xs">Empowering Young Minds</p>
                                    <p className="text-gray-700 text-[10px] mt-1">
                                        No.10/413A, Mambakkam Main Road,<br />
                                        Medavakkam, Chennai - 600 100.
                                    </p>
                                </div>

                                {/* Receipt Number and Date */}
                                <div className="grid grid-cols-2 gap-4 mb-4 text-sm relative z-10">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">No.</span>
                                        <span className="font-bold text-xl text-red-700">{formData.receiptNo}</span>
                                    </div>
                                    <div className="flex items-center gap-2 justify-end">
                                        <span className="font-semibold">Date</span>
                                        <span className="border-b-2 border-dotted border-gray-400 flex-1 text-right pr-2">{receiptDate}</span>
                                    </div>
                                </div>

                                {/* Name, Std, Sec */}
                                <div className="mb-4 text-sm space-y-2 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold w-16">Name:</span>
                                        <span className="border-b border-dotted border-gray-400 flex-1 pl-2 font-medium h-5">{formData.studentName}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">Std.</span>
                                            <span className="border-b border-dotted border-gray-400 flex-1 pl-2 font-medium h-5">{formData.standard}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">Sec.</span>
                                            <span className="border-b border-dotted border-gray-400 flex-1 pl-2 font-medium h-5">{formData.section}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Fee Table */}
                                <div className="border-2 border-blue-900 rounded-lg relative z-10 overflow-hidden">
                                    <div className="grid grid-cols-6 border-b-2 border-blue-900 font-bold text-xs uppercase text-blue-900">
                                        <div className="col-span-4 p-2 text-center border-r-2 border-blue-900">Particulars</div>
                                        <div className="p-2 text-center border-r-2 border-blue-900">Rs.</div>
                                        <div className="p-2 text-center">P.</div>
                                    </div>

                                    <div className="divide-y-2 divide-blue-900">
                                        {[
                                            { label: 'Term Fee', value: formData.termFee },
                                            { label: 'Fine', value: formData.fine },
                                            { label: 'Van Fee', value: formData.vanFee },
                                            { label: 'Admission Fee', value: formData.admissionFee },
                                            { label: 'Special Fee', value: formData.specialFee },
                                            { label: 'Extra Fee', value: formData.extraFee }
                                        ].map((item, idx) => {
                                            const split = splitAmount(item.value);
                                            return (
                                                <div key={idx} className="grid grid-cols-6 text-xs">
                                                    <div className="col-span-4 p-1.5 border-r-2 border-blue-900 flex justify-between">
                                                        <span>{item.label}</span>
                                                        <span className="border-b border-dotted border-gray-300 flex-1 mx-2"></span>
                                                    </div>
                                                    <div className="p-1.5 text-right border-r-2 border-blue-900 font-mono">{split.rupees}</div>
                                                    <div className="p-1.5 text-right font-mono">{split.paise}</div>
                                                </div>
                                            );
                                        })}

                                        {/* Total Row */}
                                        <div className="grid grid-cols-6 font-bold border-t-2 border-blue-900 text-blue-900">
                                            <div className="col-span-4 p-2 text-right border-r-2 border-blue-900 uppercase">Total Amount</div>
                                            <div className="p-2 text-right border-r-2 border-blue-900 text-lg font-mono">{totalSplit.rupees}</div>
                                            <div className="p-2 text-right text-lg font-mono">{totalSplit.paise}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Clerk Signature Section */}
                                <div className="mt-12 flex justify-end relative z-10">
                                    <div className="text-center min-w-[200px]">
                                        <div className="border-b-2 border-blue-900 h-16 mb-2 flex items-center justify-center">
                                            {formData.clerkSignatureUrl && <img src={formData.clerkSignatureUrl} alt="Signature" className="max-h-14" />}
                                        </div>
                                        <p className="font-bold text-blue-900 uppercase text-xs tracking-widest">Authorized Signatory</p>
                                        <p className="text-[10px] text-gray-500">School Clerk / Administrator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeReceiptGenerator;
