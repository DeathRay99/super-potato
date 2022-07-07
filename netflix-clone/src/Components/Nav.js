import "./Nav.css";
import { useEffect, useState } from "react";
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <div
      className="navbar"
      style={{ backgroundColor: show ? "#111" : "transparent" }}
    >
      <div>
        <img
          alt="Logonetflix"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/512px-Logonetflix.png"
          width="100"
        />
      </div>
      <div>
        <img
          alt="Netflix-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          width="35"
        />
      </div>
    </div>
  );
}

export default Nav;
