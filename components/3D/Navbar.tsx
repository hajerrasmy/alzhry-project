"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // التحقق من حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth <= 900) setBranchesOpen(false); // يقفل dropdown على الموبايل
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);         
    setBranchesOpen(false); 
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">مجموعة الظاهري</div>

        <button className="menu_btn" onClick={() => setOpen(!open)}>☰</button>

        <nav className={open ? "nav_links active" : "nav_links"}>
          <Link href="/" onClick={handleLinkClick}>الرئيسية</Link>
          <Link href="/ceo" onClick={handleLinkClick}>عن رئيس المجموعة</Link>

          {/* Dropdown فروعنا */}
          <div className="nav_item_dropdown">
            <span
              onClick={() => {
                if (!isMobile) setBranchesOpen(!branchesOpen); // فقط على Desktop
              }}
            >
              فروعنا
              <FaChevronDown className={branchesOpen ? "rotate" : ""} />
            </span>

            <div className={branchesOpen ? "dropdown active" : "dropdown"}>
              <Link href="/branches/central-markets" onClick={handleLinkClick}>فرع الأسواق المركزية والمطاعم</Link>
              <Link href="/branches/food-supply" onClick={handleLinkClick}>فرع المواد الغذائية والإعاشة</Link>
              <Link href="/branches/gulf-equipment" onClick={handleLinkClick}>وجار الخليج لمعدات المطابخ</Link>
              <Link href="/branches/contracting" onClick={handleLinkClick}>فرع المقاولات العامة</Link>
              <Link href="/branches/security-services" onClick={handleLinkClick}>فرع القعقاع للخدمات الأمنية </Link>
              <Link href="/branches/commercial-ops" onClick={handleLinkClick}>فرع العمليات  التجارية والتوكيلات</Link>
              <Link href="/branches/uae-branch" onClick={handleLinkClick}>فرع الإمارات</Link>
              <Link href="/branches/military-equipment" onClick={handleLinkClick}>فرع التجهيزات العسكرية والأمنية</Link>
            </div>
          </div>

          <Link href="/group" onClick={handleLinkClick}>عن المجموعة</Link>
          <Link href="/media" onClick={handleLinkClick}>المركز الإعلامي</Link>
          <Link href="/careers" onClick={handleLinkClick}>التوظيف</Link>
          <Link href="/contact" onClick={handleLinkClick}>اتصل بنا</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
