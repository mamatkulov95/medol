import data from "../../../public/assets/data.json";

export default function FooterRight() {
  const { footerNav } = data;

  return (
    <div className="sm:hidden md:hidden lg:block">
      <div className="flex gap-4">
        {footerNav.map(
          (
            {
              mainNav,
              subMenu1,
              subMenu2,
              subMenu3,
              subMenu4,
              subMenu5,
              subMenu6,
              subMenu7,
              subMenu8,
              subMenu9
            },
            index
          ) => (
            <div
              className="flex flex-col gap-3 text-[#595959] cursor-pointer"
              key={index}
            >
              <a
                href=""
                className=" text-2xl font-medium  hover:text-blue-700 transform"
              >
                {mainNav}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu1}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu2}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu3}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu4}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu5}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu6}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu7}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu8}
              </a>
              <a
                href=""
                className="text-sm font-[300]  hover:text-blue-700 transform"
              >
                {subMenu9}
              </a>
            </div>
          )
        )}
      </div>

      <div className="text-end pt-24">
        <p>Сайт разработан компанией www.uz</p>
      </div>
    </div>
  );
}
