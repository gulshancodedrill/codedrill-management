import { useEffect, useState } from "react";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate();
    const [data, setData] = useState<any>(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const token = localStorage.getItem("token");
      if(!token){
        navigate("login");
        return;
      }

      const fetchData = async () => {
        

      };

    },[navigate]);

    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
            className={`${
            sidebarOpen ? "w-64" : "w-16"
            } bg-white shadow-md transition-all duration-300 flex flex-col`}
        >
            <div className="flex items-center justify-between p-4 border-b">
            <span className={`${sidebarOpen ? "block" : "hidden"} font-bold`}>
                Admin
            </span>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-6 h-6" />
            </button>
            </div>
    
            <nav className="flex-1 p-2 space-y-2">
            <NavItem icon={<Home />} label="Dashboard" open={sidebarOpen} />
            <NavItem icon={<Users />} label="Users" open={sidebarOpen} />
            <NavItem icon={<BarChart3 />} label="Analytics" open={sidebarOpen} />
            <NavItem icon={<Settings />} label="Settings" open={sidebarOpen} />
            </nav>
    
            <div className="p-4 border-t">
            <NavItem icon={<LogOut />} label="Logout" open={sidebarOpen} />
            </div>
        </aside>
    
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
            {/* Top Navbar */}
            <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <span className="text-gray-600">Welcome, Admin</span>
                <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full"
                />
            </div>
            </header>
    
            {/* Dashboard Content */}
            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Users" value="1,250" />
            <Card title="Sales" value="$8,400" />
            <Card title="Active Projects" value="35" />
            </section>
        </main>
        </div>
    );
}

function NavItem({ icon, label, open }) {
    return (
      <a
        href="#"
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition"
      >
        {icon}
        {open && <span>{label}</span>}
      </a>
    );
  }
  
  function Card({ title, value }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500 text-sm">{title}</h2>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
    );
  }
  