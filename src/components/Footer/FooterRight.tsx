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
            <div className="flex flex-col gap-3 text-[#595959]" key={index}>
              <p className=" text-2xl font-medium">{mainNav}</p>
              <p className="text-sm font-[300]">{subMenu1}</p>
              <p className="text-sm font-[300]">{subMenu2}</p>
              <p className="text-sm font-[300]">{subMenu3}</p>
              <p className="text-sm font-[300]">{subMenu4}</p>
              <p className="text-sm font-[300]">{subMenu5}</p>
              <p className="text-sm font-[300]">{subMenu6}</p>
              <p className="text-sm font-[300]">{subMenu7}</p>
              <p className="text-sm font-[300]">{subMenu8}</p>
              <p className="text-sm font-[300]">{subMenu9}</p>
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
