import Link from "next/link";
import Swal from "sweetalert2";

const Product = ({ url, title, price }) => {
  async function loveHandler(e) {
    e.stopPropagation();
    return Swal.fire("Loved");
  }
  return (
    <div>
      <div className="relative bg-gray-200 p-2 duration-100 rounded-2xl hover:bg-gray-300">
        <img
          src={url}
          className=" aspect-square w-full rounded-xl mb-2 hover:scale-105 duration-100"
          alt={"Gambar " + title}
        />
        <div className="bg-white px-2 py-2 rounded-xl text-center">
          <h1 className="font-bold">{title}</h1>
          <h2 className="font-semibold opacity-75">Rp.{price}</h2>
          {/* <small className="opacity-75">12 Agustus 2023</small> */}
        </div>
        <button
          onClick={loveHandler}
          className=" absolute top-3 right-2 text-lg "
        >
          <i className="bx bx-heart bx-fw"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
