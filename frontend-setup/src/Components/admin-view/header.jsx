import { logoutUser, resetTokenAndCredential } from "@/store/auth-slice";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { use } from "react";
import { useNavigate } from "react-router-dom";
function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();;
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button className="lg:hidden sm:block" onClick={() => { setOpen(true) }}>
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow" onClick={() => {
            dispatch(resetTokenAndCredential());
            sessionStorage.removeItem('token');
            navigate('/auth/login');
          }
          }>
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
