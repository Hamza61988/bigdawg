import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 flex-shrink-0">
        <Navbar />
      </div>

     
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: fixed height, non-scrollable */}
        <div className="flex-shrink-0 h-full overflow-hidden">
          <Sidebar />
        </div>

      
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
