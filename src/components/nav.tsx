import ActiveLink from "./ActiveLink";
const navigationPayroll = [
  {
    name: "Map 2022",
    url: "/",
  },
  {
    name: "Map 2021",
    url: "/map2021",
  },
  {
    name: "Map 2020",
    url: "/map2020",
  },
  {
    name: "Map 2019",
    url: "/map2019",
  },

  // {
  //   name: "Charts",
  //   url: "/charts",
  //   newtab: true,
  // },
  {
    name: "Los Angeles Controller",
    url: "https://controller.lacity.gov",
    newtab: true,
  },
];

function Nav() {
  return (
    <div className="z-50 bg-[#1a1a1a] flex flex-col">
      <nav className="z-50 flex flex-row  h-content">
        {navigationPayroll.map((item: any, itemIdx: any) => (
          <ActiveLink
            activeClassName="text-white  py-2  md:py-3 px-6 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300"
            href={item.url}
            key={itemIdx}
            target={`${item.newtab === true ? "_blank" : ""}`}
          >
            <p className="text-white py-2 text-sm md:text-base   md:py-3 px-6 block hover:text-green-300 focus:outline-none underline">
              {item.name}
            </p>
          </ActiveLink>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
