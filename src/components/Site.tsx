'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
const nav=[['Home','/'],['About Us','/about'],['Products','/products'],['Certificate','/certificate'],['Global Presence','/global-presence'],['Contact','/contact']];
export function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="topline"><div className="container topline-inner"><span>GROOVED FITTINGS & COUPLINGS</span><div className="topline-contact">
  <a href="tel:04612900568"><Phone size={13} /> 0461-2900568</a>
  <a href="mailto:info@grovejointindia.com">
    <Mail size={13} /> info@grovejointindia.com
  </a>
</div></div></div><div className="container nav-wrap"><Link href="/" className="brand"><Image src="/images/grovjoint-logo.png" alt="Grovjoint India" width={92} height={54} priority/><span><b>GROVJOINT INDIA</b><small>PIPE FITTINGS PVT LTD</small></span></Link><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav-links show':'nav-links'}>{nav.map(([label,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{label}{label==='Products'&&<ChevronDown size={13}/>}</Link>)}<Link className="nav-cta" href="/request-quote">Request a Quote <ArrowUpRight size={15}/></Link></nav></div></header>}
export function Footer() {
 
  return (
    <footer className="footer footer-premium">
      <div className="container footer-grid">

        {/* COMPANY */}
        <div className="footer-company">
          <Link href="/" className="brand footer-brand">
            <Image
              src="/images/grovjoint-logo.png"
              alt="Grovjoint India"
              width={80}
              height={48}
            />
            <span>
              <b>GROVJOINT INDIA</b>
              <small>PIPE FITTINGS PVT LTD</small>
            </span>
          </Link>

          <p>
            Grooved ductile iron fittings, couplings and flanges
            for infrastructure, fire protection and building
            services applications.
          </p>

         
        </div>

        {/* EXPLORE */}
        <div className="footer-explore">
          <h4>Explore</h4>

          {nav.slice(1, 6).map(([label, url]) => (
            <Link key={url} href={url}>
              <span className="footer-arrow">›</span>
              {label}
            </Link>
          ))}

          <a
            href="/catalogue/grovjoint-india-full-catalogue.pdf"
            className="footer-catalogue"
            download
          >
            <span className="catalogue-pdf">PDF</span>
            <span className="catalogue-text">
              <b>Download Full Catalogue</b>
              <small>Complete Product Range (PDF)</small>
            </span>
            <ArrowUpRight size={21} />
          </a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <p>
            <MapPin />
            <span>
              2nd Floor, 4/28 E-2, K.M.A Warehousing Complex,
              Harbour Bye Pass Road, Tuticorin– 628006,
              Tamil Nadu, India
            </span>
          </p>

          <p>
            <Phone />
            <a href="tel:04612900568">0461-2900568</a>
          </p>

          <p>
            <Mail />
            <a href="mailto:info@grovejointindia.com">
              info@grovejointindia.com
            </a>
          </p>
        </div>

      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Grovjoint India Pipe Fittings PVT LTD.
          All rights reserved.
        </span>
        <span>Built for dependable connections.</span>
      </div>
    </footer>
  );
}export function Shell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
export function PageHero({eyebrow,title,copy}:{eyebrow:string,title:string,copy:string}){return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{copy}</p></div></section>}
