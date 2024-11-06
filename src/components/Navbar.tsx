import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full items-center p-4 justify-around absolute z-50">
      <div className=" w-1/3 font-bold text-lg">
        <Link href={"#top"}>
          <Image
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-lg"
            objectFit="cover"
          />
        </Link>
      </div>
      <div className="flex w-1/4 justify-evenly font-medium text-white">
        <div>
          <SearchIcon />
        </div>
        <div>
          <ShoppingCartIcon />
        </div>
        <div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
