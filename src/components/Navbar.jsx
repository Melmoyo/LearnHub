import { Plus } from "lucide-react";
import { useLocation } from "react-router";
const Navbar = () => {
  const location = useLocation();
  const shouldHide = location.pathname.startsWith("/details");

  return (
    <>
      <header
        className={`${shouldHide ? "hidden md:block" : "block"} w-screen h-18 bg-surface`}
      >
        <nav className=" flex justify-between items-center h-15">
          <div className="ml-8">
            <h1 className="font-display text-2xl">
              <span className="">Learn</span>
              <span className="text-amber">Hub</span>
            </h1>
          </div>
          <div className="mr-8">
            <button className="flex items-center justify-center  rounded-lg border border-muted w-20 h-10">
              <Plus size={20} />
              Add
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
