import React, { useState } from 'react'
import SearchField from '../components/SearchField'

function RegulatoryCompliance() {
    const [showTerms, setShowTerms] = useState(false);

    const toggleTerms = () => setShowTerms((prev) => !prev);

    return (
        <div>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-2'>Regulatory Compliance</h1>
            <div className="container mx-auto px-4 pb-16 mt-3">
                <ComplianceHero />
                <section className="my-16 space-y-8">
                    <ComplianceSection
                        title="Our Commitment to Compliance"
                        text="We are committed to upholding the highest standards of ethical sourcing and supply chain transparency. We actively work with our suppliers to ensure compliance with relevant regulations and industry best practices."
                    />
                    <ComplianceSection
                        title="Key Compliance Areas"
                        text="We focus on several key areas in our supply chain regulatory compliance efforts, including conflict minerals, forced labor, environmental sustainability, data privacy, and cybersecurity."
                    />
                    <button
                        className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
                        onClick={toggleTerms}
                    >
                        View Compliance Terms
                    </button>
                </section>
                {showTerms && <Terms />}
            </div>
        </div>
    )
}

export default RegulatoryCompliance



const ComplianceHero = () => (
    <div className="bg-gradient-to-r from-cyan-400 to-cyan-700 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Supply Chain Regulatory Compliance</h1>
        <p className="mt-4">Ensuring transparency and ethical practices throughout our supply chain</p>
    </div>
);

const ComplianceSection = ({ title, text }) => (
    <div className="my-8">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-base">{text}</p>
    </div>
);

const Terms = () => (
    <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Compliance Terms</h3>
        <ul className="list-none space-y-2">
            <li>Conflict Minerals Policy</li>
            <li>Forced Labor Policy</li>
            <li>Environmental Sustainability Policy</li>
            <li>Data Privacy Policy</li>
            <li>Cybersecurity Policy</li>
            {/* Add more terms as needed */}
        </ul>
    </div>
);

