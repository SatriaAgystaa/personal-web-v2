// pages/_app.js
import Layout from '../components/layouts/Layout'; // Import Layout yang baru
import '../styles/globals.css'; // Import CSS global jika ada

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
