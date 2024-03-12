import pfp from "../assets/Oval.png";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

type HeaderProps = {
  theme: string | null;
  handleThemeSwitch: () => void;
};

const Header = ({ theme, handleThemeSwitch }: HeaderProps) => {
  return (
    <header className="bg-blue-3 flex justify-between">
      <div className="relative w-[72px] h-[72px] bg-purple-1 rounded-r-3xl flex items-center justify-center overflow-hidden">
        <div className="absolute w-full bg-purple-2 top-9 h-full rounded-l-3xl"></div>
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.48597 1.49827e-07L14 12.8992L20.514 0C24.9652 2.30887 28 6.91019 28 12.2097C28 19.8258 21.732 25.9999 14 25.9999C6.26801 25.9999 0 19.8258 0 12.2097C0 6.91019 3.03482 2.30887 7.48597 1.49827e-07Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex">
        <button
          onClick={handleThemeSwitch}
          className="flex items-center justify-center w-[72px]"
        >
          {theme === "light" ? <img src={dark} /> : <img src={light} />}
        </button>
        <div className="flex items-center justify-center px-4 border-l border-l-gray-600">
          <img src={pfp} />
        </div>
      </div>
    </header>
  );
};

export default Header;
