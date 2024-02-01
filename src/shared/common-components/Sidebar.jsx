import { useState } from "react";
import { Group, Code, Image, Divider } from "@mantine/core";
import {
  IconHome2,
  IconFingerprint,
  IconTimeline,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconMenu2,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
import Logo from "./../../assets/download.png";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const data = [
  { link: "", label: "Home", icon: IconHome2 },
  { link: "/interns", label: "Intern", icon: IconReceipt2 },
  { link: "", label: "Mentor", icon: IconFingerprint },
  { link: "/roadmap", label: "Roadmap", icon: IconTimeline },
];

export function Sidebar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link to={item.link}>
      <a
        className={classes.link}
        data-active={item.label === active || undefined}
        // href={item.link}
        key={item.label}
        onClick={(event) => {
          //   event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} size={20} stroke={1.3} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group
          className={classes.header}
          justify="center"
          style={{ position: "relative" }}
        >
          {/* <MantineLogo size={28} inverted style={{ color: "white" }} /> */}
          <IconMenu2
            className="menu-collapse"
            color="white"
            size={32}
          ></IconMenu2>
          <Image className="logo-img" src={Logo} />
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
        <Divider my="md" />
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
