import { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout'; // Import Layout yang baru
import '../styles/globals.css'; // Import CSS global jika ada

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Mengambil nilai dark mode dari localStorage jika ada
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        localStorage.setItem('darkMode', 'true');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('darkMode', 'false');
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <Layout toggleDarkMode={toggleDarkMode}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
