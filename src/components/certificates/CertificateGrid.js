// components/certificates/CertificatesGrid.js

import React, { useContext } from 'react';
import { CertificatesContext } from '../../context/CertificatesContext';

const CertificatesGrid = () => {
    const { certificates } = useContext(CertificatesContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
                <div key={index} className="border shadow-md rounded-lg p-4">
                    <iframe
                        src={certificate.url}
                        title={`Certificate ${index + 1}`}
                        className="w-full h-64"
                        allowFullScreen
                    ></iframe>
                    <p className="text-center mt-2 font-semibold">{certificate.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CertificatesGrid;
