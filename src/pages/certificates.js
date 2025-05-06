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
    title: "FIGMA FOR UI/UX DESIGN",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/FIGMA FOR UIUX DESIN_page-0001.jpg",
    pdfUrl: "/images/pdf/FIGMA FOR UIUX DESIN.pdf",
    icon: FaCertificate,
    iconColor: "text-yellow-500"
  },
  {
    id: 2,
    title: "JavaScript Best Practices",
    issuer: "Udemy",
    date: "2025",
    imageUrl: "/images/certificates/JavaScript Best Practices_page-0001.jpg",
    pdfUrl: "/images/pdf/JavaScript Best Practices.pdf",
    icon: FaLaptopCode,
    iconColor: "text-red-500"
  },
  {
    id: 3,
    title: "Practical Next.js & React",
    issuer: "Udemy",
    date: "2025",
    imageUrl: "/images/certificates/Practical Next.js & React_page-0001.jpg",
    pdfUrl: "/images/pdf/Practical Next.js & React.pdf",
    icon: FaLaptopCode,
    iconColor: "text-pink-500"
  },
  {
    id: 4,
    title: "React Crash Course",
    issuer: "Udemy",
    date: "2025",
    imageUrl: "/images/certificates/React Crash Course_page-0001.jpg",
    pdfUrl: "/images/pdf/React Crash Course.pdf",
    icon: FaLaptopCode,
    iconColor: "text-blue-500"
  },
  {
    id: 5,
    title: "UI/UX RESEARCH AND DESIGN",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/UI-UX RESEARCH AND DESIGN_page-0001.jpg",
    pdfUrl: "/images/pdf/UI-UX RESEARCH AND DESIGN.pdf",
    icon: FaCertificate,
    iconColor: "text-purple-500"
  },
  {
    id: 6,
    title: "USER EXPERIENCE DESIGN",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/USER EXPERIENCE DESIGN_page-0001.jpg",
    pdfUrl: "/images/pdf/USER EXPERIENCE DESIGN.pdf",
    icon: FaCertificate,
    iconColor: "text-green-500"
  },
  {
    id: 7,
    title: "USER EXPERIENCE RESEARCH",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/USER EXPERIENCE RESEARCH_page-0001.jpg",
    pdfUrl: "/images/pdf/USER EXPERIENCE RESEARCH.pdf",
    icon: FaUniversity,
    iconColor: "text-yellow-500"
  },
  {
    id: 8,
    title: "USER INTERFACE DESIGN",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/USER INTERFACE DESIGN_page-0001.jpg",
    pdfUrl: "/images/pdf/USER INTERFACE DESIGN.pdf",
    icon: FaGraduationCap,
    iconColor: "text-red-500"
  },
  {
    id: 9,
    title: "UX WRITING",
    issuer: "MySkill",
    date: "2025",
    imageUrl: "/images/certificates/UX WRITING_page-0001.jpg",
    pdfUrl: "/images/pdf/UX WRITING.pdf",
    icon: FaCertificate,
    iconColor: "text-indigo-500"
  },
  {
    id: 10,
    title: "Narantraya Certificate",
    issuer: "PT Narantraya Teknologi Digital",
    date: "2024",
    imageUrl: "/images/certificates/Narantraya Satria Agysta.png",
    pdfUrl: "/images/pdf/Narantraya Satria Agysta.pdf",
    icon: FaUniversity,
    iconColor: "text-indigo-500"
  },
  {
    id: 11,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "2023",
    imageUrl: "/images/certificates/Belajar Dasar Structured Query Language (SQL)_page-0001.jpg",
    pdfUrl: "/images/pdf/Belajar Dasar Structured Query Language (SQL).pdf",
    icon: FaLaptopCode,
    iconColor: "text-blue-500"
  },
  {
    id: 12,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    date: "2023",
    imageUrl: "/images/certificates/Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg",
    pdfUrl: "/images/pdf/Belajar Membuat Front-End Web untuk Pemula.pdf",
    icon: FaLaptopCode,
    iconColor: "text-purple-500"
  },
  {
    id: 13,
    title: "Cyberlabs Certificate",
    issuer: "PT Cyberlabs",
    date: "2023",
    imageUrl: "/images/certificates/Cyberlabs Satria Agysta.jpg",
    pdfUrl: "/images/pdf/Cyberlabs Satria Agysta.jpg",
    icon: FaCertificate,
    iconColor: "text-green-500"
  },
  {
    id: 14,
    title: "Wan Certificate",
    issuer: " PT Wan Teknologi",
    date: "2023",
    imageUrl: "/images/certificates/Wan Satria Agysta.jpg",
    pdfUrl: "/images/pdf/Wan Satria Agysta.jpg",
    icon: FaUniversity,
    iconColor: "text-pink-500"
  }
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