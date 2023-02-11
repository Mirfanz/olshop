import { Button, IconButton } from "@material-tailwind/react";
// import { useRouter } from "next/router";
import Link from "next/link";

const Product = ({ url, title, price }) => {
  // const router = useRouter();
  return (
    <Link href={url}>
      <div className="flex flex-col bg-white p-2 duration-100 rounded-md hover:bg-gray-50">
        <div className="w-100 overflow-hidden rounded-md">
          <img
            src={url}
            className="w-full aspect-square duration-300 hover:scale-110 "
          />
        </div>
        <h2 className="">{title}</h2>
        <div className="font-bold text-blue-600 mb-1">Rp.{price}</div>

        <div className="flex gap-1 mt-auto">
          <Button size="sm" color="blueviolet" className="w-full">
            Add Cart
          </Button>
          <IconButton
            variant="outlined"
            size="sm"
            color="green"
            className="px-4"
          >
            <i className="bx bxl-whatsapp bx-fw"></i>
          </IconButton>
        </div>
      </div>
    </Link>
  );
};

export default Product;
