const StatCard = ({ value, statTitle, subtitle, statTitleDesktop }) => {
  return (
    <>
      <div className="flex flex-col bg-surface w-50 h-20 rounded-lg justify-center p-4 ml-8 mt-5">
        <h2 className="uppercase text-sm font-sans text-muted ">{statTitle}</h2>
        <span className="text-3xl font-semibold font-display">{value}</span>
        <span className="text-sm text-muted hidden md:block">{subtitle}</span>
      </div>
    </>
  );
};
export default StatCard;
