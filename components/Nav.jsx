import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const nav = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const path = router.pathname;
  console.log(path);
  return (
    // <nav className="navbar">
    //   <div className="container">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           href="/"
    //           className="nav-link"
    //           data-active={path === "/"}
    //           title="Beranda"
    //         >
    //           <i className="bx bx-fw bxs-home"></i>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           href="/search"
    //           className="nav-link"
    //           data-active={path === "/search"}
    //           title="Pencarian"
    //         >
    //           <i className="bx bx-fw bx-search-alt"></i>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           href="/cart"
    //           className="nav-link"
    //           data-active={path === "/cart"}
    //           title="Keranjang"
    //         >
    //           <i className="bx bx-fw bx-cart"></i>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           href="/contact"
    //           className="nav-link"
    //           data-active={path === "/contact"}
    //         >
    //           <i className="bx bx-fw bx-mail-send"></i>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="fixed left-0 right-0 bg-white top-0  py-2 px-3">
      {/* <div className="container"> */}
      <div className="flex align-middle py-2 text-lg">
        <button
          className=" text-xl"
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className="bx bx-fw bx-grid-alt"></i>
        </button>
        <h1 className=" mx-auto font-bold">F'Store</h1>
        <div className={"nav-menu " + (show ? "show" : "hide")}>
          <button onClick={() => setShow(!show)}>Close Sidebar</button>
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          quaerat architecto ratione, maxime harum ea distinctio dolorem illum
          quam dolor?
        </div>
        <button className=" text-xl">
          <i className="bx bx-fw bx-cart"></i>
        </button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default nav;
