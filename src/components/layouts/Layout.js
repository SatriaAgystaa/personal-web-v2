import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children, toggleDarkMode }) => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="flex">
        {/* Sidebar */}
        <Sidebar toggleDarkMode={toggleDarkMode} />

        {/* Main Content */}
        <div className="flex justify-center w-full bg-[#FDFDFD] dark:bg-[#070707] text-gray-900 dark:text-white">
          {children}
        </div>
      </div>

      <div className="">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
