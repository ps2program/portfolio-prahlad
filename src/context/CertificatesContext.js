// context/CertificatesContext.js

import React, { createContext, useState } from 'react';

// Create context
export const CertificatesContext = createContext();

// Context provider
export const CertificatesProvider = ({ children }) => {
    const [certificates] = useState([
        {
            name: 'React Certification',
            url: 'https://drive.google.com/file/d/1NMzfnPVmzEmofwrbV3o9XCGyFCWGWLRy/view?usp=sharing',
        },
        {
            name: 'JavaScript Certification',
            url: 'https://drive.google.com/file/d/14HY9fKQuu0JU4mzqwXMRChhEDu5wgn28/view?usp=drive_link',
        },
        // Add more certificates as needed
    ]);

    return (
        <CertificatesContext.Provider value={{ certificates }}>
            {children}
        </CertificatesContext.Provider>
    );
};
