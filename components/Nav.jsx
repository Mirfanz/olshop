import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const nav = () => {
  const router = useRouter();
  const path = router.pathname;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    <>
      <nav className="fixed left-0 right-0 bg-white top-0  py-2 px-3">
        <div className="flex align-middle py-2 text-lg">
          <button
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            className=" text-xl"
          >
            <i className="bx bx-fw bx-grid-alt"></i>
          </button>
          <h1 className=" mx-auto font-bold">F'Store</h1>
          <button className=" text-xl">
            <i className="bx bx-fw bx-cart"></i>
          </button>
        </div>
      </nav>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Cari sesuatu disini" />

            <Link href="/">Beranda</Link>
            <br />
            <Link href="/user/cart">Keranjang</Link>
            <br />
            <Link href="#">Disukai</Link>
            <br />
            <Link href="#">Akun Saya</Link>
            <br />
            <Link href="/product/add">Tambah Produk</Link>
            <br />
          </DrawerBody>

          <DrawerFooter>
            <Button variant={"outline"} colorScheme="facebook" mr={3}>
              Register
            </Button>
            <Button variant="solid" colorScheme={"facebook"}>
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default nav;
