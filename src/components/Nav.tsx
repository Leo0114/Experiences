import { useState } from "preact/hooks";
import Menu from "@components/layout/Menu";

const Nav = () => {
  const [navi, setNavi] = useState(false);
  const handleNav = () => {
    setNavi(!navi);
    if (!navi) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const items = [
    { title: "Home" },
    { title: "Destino" },
    { title: "Reservaciones" },
    { title: "Amenidades" },
    { title: "Habitaciones" },
  ];
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold z-20 text-slate-50">Experiences</h1>
      <Menu onToggleNav={handleNav} />
      <div
        className={
          navi
            ? " ease-in duration-300 fixed text-slate-300 left-0 top-0 w-full h-screen bg-slate-900/90 px-4 py-7 flex-col z-10"
            : " absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed  w-full h-full items-center justify-center">
          {items.map((item) => (
            <li className="font-bold text-3xl p-8">{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
