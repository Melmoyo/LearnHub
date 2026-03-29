const Footer = () => {
  return (
    <>
      <div className="bg-surface md:hidden">
        <div className="flex gap-4 h-15 items-center justify-around ">
          <button className="text-muted">
            <div className="bg-amber w-10 rounded-lg h-1 mx-auto"></div>Courses
          </button>
          <button className="text-muted">
            {" "}
            <div className="bg-muted w-10 rounded-lg h-1 mx-auto"></div>Progress
          </button>
        </div>
      </div>
    </>
  );
};
export default Footer;
