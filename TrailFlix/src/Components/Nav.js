import "./Nav.css";
import TrailFlix from "../assets/TrailFlix.png";
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
          src={TrailFlix}
          width="110"
          style={{
            paddingTop:"20px",
            height:"100%",
          }}
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
