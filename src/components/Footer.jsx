import { Link } from "react-router-dom";

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <p className="footer-text">
        <span>&copy;{`${ year }`}</span>
        <span>All rights reserved.</span>
      </p>

      <ul>
        <li className="footer-links">
          <Link to="/privacy">Privacy</Link>
        </li>
        <li className="footer-links">
          <Link to="/legal-notice">Legal&nbsp;Notice</Link>
        </li>
      </ul>
    </footer>
  );
}