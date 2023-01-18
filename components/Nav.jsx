import Link from "next/link";
import { useRouter } from "next/router";

const nav = () => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              href="/"
              className="nav-link"
              data-active={path === "/"}
              title="Beranda"
            >
              <i className="bx bx-fw bxs-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search"
              className="nav-link"
              data-active={path === "/search"}
              title="Pencarian"
            >
              <i className="bx bx-fw bx-search-alt"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/cart"
              className="nav-link"
              data-active={path === "/cart"}
              title="Keranjang"
            >
              <i className="bx bx-fw bx-cart"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/contact"
              className="nav-link"
              data-active={path === "/contact"}
            >
              <i className="bx bx-fw bx-mail-send"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
