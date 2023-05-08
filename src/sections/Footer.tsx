import Link from "next/link";

function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/Iqsan01/v1"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed & Built by Muhammad Ikhsan.</span>
      </Link>
    </footer>
  );
}

export default Footer;
