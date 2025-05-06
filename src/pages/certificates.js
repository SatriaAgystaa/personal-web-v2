import Head from "next/head";
import { motion } from 'framer-motion';
import CertificateHeader from "../components/Certificates/CertificateHeader";
import CertificateCard from "../components/Certificates/CertificateCard";
import CertificateCTA from "../components/Certificates/CertificateCTA";
import CertificateFooter from "../components/Certificates/CertificateFooter";
import { 
  FaUniversity,
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode
} from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Practical Next.js & React - Build a Real WebApp with Next.js",
    issuer: "Udemy",
    date: "April 2025",
    imageUrl: "/images/certificates/sert0.jpg",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaLaptopCode,
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    title: "UI UX RESEARCH AND DESIGN",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert1.png",
    pdfUrl: "/pdf/certificate2.pdf", // Tambahkan link PDF
    icon: FaCertificate,
    iconColor: "text-purple-500"
  },
  {
    id: 3,
    title: "FIGMA FOR UI/UX DESIGN",
    issuer: "MySkill",
    date: "February 2025",
    imageUrl: "/images/certificates/sert2.png",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaCertificate,
    iconColor: "text-green-500"
  },
  {
    id: 4,
    title: "USER EXPERIENCE DESIGN",
    issuer: "MySkill",
    date: "February 2022",
    imageUrl: "/images/certificates/sert3.png",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaCertificate,
    iconColor: "text-yellow-500"
  },
  {
    id: 5,
    title: "USER EXPERIENCE RESEARCH",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert4.png",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaUniversity,
    iconColor: "text-red-500"
  },
  {
    id: 6,
    title: "USER INTERFACE DESIGN",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert5.png",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaGraduationCap,
    iconColor: "text-indigo-500"
  },
  {
    id: 7,
    title: "UX WRITING",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert6.png",
    pdfUrl: "/pdf/certificate1.pdf", // Tambahkan link PDF
    icon: FaCertificate,
    iconColor: "text-pink-500"
  }
  // ... (data lainnya tetap sama, tambahkan pdfUrl untuk masing-masing)
];

const CertificatesPage = () => {
  const handleViewDetails = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl font-sans mt-16 sm:mt-16 md:mt-0">
      <Head>
        <title>Certificates | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>

      <CertificateHeader />
      
      {/* Certificates Grid */}
      <div className="grid gap-0 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {certificates.map((cert) => (
          <CertificateCard 
            key={cert.id} 
            cert={cert} 
            handleViewDetails={handleViewDetails} 
          />
        ))}
      </div>

      <CertificateCTA />
      <CertificateFooter />
    </div>
  );
};

export default CertificatesPage;