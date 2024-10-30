

function Footer() {
  return (
    <div className="bg-slate-800 z-20 w-screen flex justify-center p-3 sticky bottom-0 top-full">
      <p className="text-lg font-thin font-bold text-gray-200 align-middle">
        SabbirMMS @ {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
