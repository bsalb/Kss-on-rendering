import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white flex-col items-center gap-y-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
