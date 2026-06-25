import { Link } from "react-router-dom";

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <p className="max-[320px]:text-xs">
        &copy;{`${ year } `}
        All rights reserved.
      </p>

      <ul>
        <li className="footer-links">
          <Link to="/privacy">Privacy</Link>
        </li>
        <li className="footer-links">
          <Link to="/legal-notice">Legal Notice</Link>
        </li>
      </ul>
    </footer>
  );
}