import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header";
import { commonSelector } from "../../../store/features/common/selectors";
import StudentSidebar from "../Sidebar";


function StudentLayout() {
  const { isSidebarOpen } = useSelector(commonSelector);

  return (
    <div className="h-screen w-screen flex">
      <aside
        className={`${
          isSidebarOpen ? "w-52" : "w-15"
        } h-full border-r transition-all`}>
        <StudentSidebar />
      </aside>

      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default StudentLayout;