import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  Button,
  IconButton,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
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
          <div className="mx-auto">
            <img className="h-8" src="/logo.png" alt="" />
          </div>
          <Menu>
            <MenuButton className=" text-xl">
              <i className="bx bx-fw bx-cart"></i>
            </MenuButton>
            <MenuList>
              <p className="px-3">Keranjang Belanja Kosyong!</p>
              {/* <MenuItem>
                <div className="flex w-full p-y1 px-2 gap-2 bg-slate-200 rounded-md">
                  <img
                    src="/img/pcx.jpeg"
                    style={{ width: "5rem" }}
                    className="ratio-square"
                    alt=""
                  />
                  <div className="infos">
                    <h1>Nama Produk</h1>
                    <h2>Rp.19000</h2>
                  </div>
                </div>
              </MenuItem> */}
              {/* <MenuDivider />
              <MenuItem>
                <Link href={"/user/cart"} className="text-center">
                  Lihat Semua
                </Link>
              </MenuItem> */}
            </MenuList>
          </Menu>
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
          <DrawerHeader>Menu Navigasi</DrawerHeader>

          <DrawerBody>
            <Input variant={"flushed"} placeholder="Temukan Produk" />
            <br />
            <br />
            <div className="flex flex-col gap-3">
              <Link href="/">Beranda</Link>
              <Link href="/user/cart">Keranjang</Link>
              <Link href="#">Disukai</Link>
              <Link href="#">Akun Saya</Link>
              <Link href="/product/add">Tambah Produk</Link>
            </div>
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
