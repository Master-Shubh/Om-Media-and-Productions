"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoStyles from "./BrandLogo.module.css";
export default function Header(){const [open,setOpen]=useState(false);const links=[["Home","/"],["About","/about"],["Services","/services"],["Portfolio","/portfolio"],["Packages","/packages"],["Contact","/contact"]];return <header className="header"><Link className="brand" href="/" onClick={()=>setOpen(false)} aria-label="OM Media & Productions home"><img className={logoStyles.logo} src="/logo/om-logo-fixed.svg" alt="OM Media & Productions"/></Link><nav className={open?"nav open":"nav"}>{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}</nav><Link className="header-quote" href="/contact">Get Quote <ArrowRight size={15}/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></header>}
