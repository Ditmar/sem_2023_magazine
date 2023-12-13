import React from "react";
import { LinkInterface } from "@/interfaces/interfacesCommon";
import styles from "./styles.module.scss";
const Link: React.FC<LinkInterface> = ({
  href,
  target,
  rel,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.link} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
