import { Button, IconButton } from "@material-tailwind/react";

const Product = ({ url, title, price }) => {
  return (
    <div className=" flex flex-col bg-white p-2 rounded-md ">
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
        <IconButton variant="outlined" size="sm" color="green" className="px-4">
          <i className="bx bxl-whatsapp bx-fw"></i>
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
