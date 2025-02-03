import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex items-center justify-center w-full min-h-screen bg-[#FDFDFD]"> {/* Pastikan ada margin yang cukup untuk sidebar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
