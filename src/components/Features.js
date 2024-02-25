export default function Features() {
  return (
    <div className="px-48 grid grid-cols-3 justify-items-center py-12">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/Features/supporting.png"
          alt="family"
          className="w-40 h-40"
        />
        <p className="text-2xl ">Family Friendly</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <img src="/Features/business.png" alt="family" className="w-40 h-40" />
        <p className="text-2xl ">Corporate Bookings</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/Features/accessible.png"
          alt="family"
          className="w-40 h-40"
        />
        <p className="text-2xl ">Budegt Friendly</p>
      </div>
    </div>
  );
}
