"use client";
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <Navbar
        id="home"
        className={`navbar navbar-expand-md navbar-light Nav ${
          scrolled ? "new" : ""
        }`}
        expand="lg">
        <Link className="navbar-brand ml-auto" href="/">
          <Image
            height={60}
            width={260}
            layout="intrinsic"
            src="/logo.png"
            alt="MohonMart"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <div className="drop-down" id="basic-nav-dropdown">
              <div className="navbar-nav m-auto">
                <Link className={styles.navItem} href="/">
                  <div className="nav-link">
                    <p>Home</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="/gallery">
                  <div className="nav-link">
                    <p>Accessories</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="/gallery">
                  <div className="nav-link">
                    <p>Clothing</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="/gallery">
                  <div className="nav-link">
                    <p>Cosmetics</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="/gallery">
                  <div className="nav-link">
                    <p>Others</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="/about">
                  <div className="nav-link">
                    <p>About</p>
                  </div>
                </Link>
                <Link className={styles.navItem} href="#contact">
                  <div className="nav-link">
                    <p>Contact</p>
                  </div>
                </Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* -------1st Navbar End, 2nd Navbar Start-------- */}

      <Navbar
        expanded={expanded}
        onToggle={setExpanded}
        className={`navbar navbar-expand-md navbar-light navRes ${
          scrolled ? "new" : ""
        }`}
        expand="lg">
        <Link className="navbar-brand ml-auto" href="/">
          <Image
            height={50}
            width={220}
            layout="fixed"
            src="/logo.png"
            alt="MohonMart"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/">
                <p className={styles.navItem}>Home</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/gallery">
                <p className={styles.navItem}>Accessories</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/gallery">
                <p className={styles.navItem}>Clothing</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/gallery">
                <p className={styles.navItem}>Cosmetics</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/gallery">
                <p className={styles.navItem}>Others</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="/about">
                <p className={styles.navItem}>About</p>
              </Link>
            </div>
            <div className={styles.resMenu}>
              <Link onClick={closeMenu} className="nav-link" href="#contact">
                <p className={styles.navItem}>Contact</p>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
