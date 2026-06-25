export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer id="_end">
      <p>
        &copy; {`${ year } `}
        All rights reserved.
      </p>
      <div>
        <a href="">Privacy</a>
        <a href="">Legal Notice</a>
      </div>
    </footer>
  );
}