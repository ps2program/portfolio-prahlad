// pages/Certificates.js

import CertificatesGrid from '../components/certificates/CertificateGrid';
import { CertificatesProvider } from '../context/CertificatesContext';

const Certificates = () => {
    return (
        <CertificatesProvider>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">My Certificates</h1>
                <CertificatesGrid />
            </div>
        </CertificatesProvider>
    );
};

export default Certificates;
