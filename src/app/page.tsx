import HomeClientMarquee from '@/components/HomeClientMarquee';import Link from 'next/link';
import {
  ArrowUpRight,
  Boxes,
  Globe2,
  ShieldCheck,
  CreditCard,
  Wrench,
  Award,
  Truck
} from 'lucide-react';
import { Shell } from '@/components/Site';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <Shell>
      <main>

        {/* HERO IMAGE SLIDER */}
        <HeroSlider />

        {/* COMPANY INTRODUCTION */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Grovjoint India</div>
              <h2>
                Built around quality, service and dependable connections.
              </h2>
              <p>
                Our catalogue presents a broad range of grooved ductile iron
                pipe fittings and couplings designed for practical installation
                and dependable piping connections.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>30+</strong>
                <span>Catalogue product models</span>
              </div>

             <div className="stat">
              <strong>UL &amp; FM</strong>
              <span>
                   Certified for Our Range of Products
               </span>
              </div>

              <div className="stat">
                <strong>DI</strong>
                <span>Ductile iron product range</span>
              </div>

            <div className="stat">
  <strong>GLOBALLY CERTIFIED</strong>
  <span>
    <h4>Certified to International Quality and Fire Protection Standards.
  </h4></span>
</div>
            </div>
          </div>
        </section>

        
{/* PRODUCT PORTFOLIO */}
<section className="section section-dark">
  <div className="container">
    <div className="section-head">
      <div className="eyebrow">Product portfolio</div>
      <h2>Purpose-built components for grooved piping systems.</h2>
      <p>
        Browse couplings, elbows, tees, mechanical tees, reducers,
        flanges and end caps. Each product listing references its
        catalogue model number.
      </p>
    </div>

    <div className="cards">

      {/* Couplings */}
      <div className="glass-card product-category-card">
        <div className="category-image">
          <img src="/images/products/GJRC50G.jpg" alt="Grooved pipe coupling" />
        </div>
        <h3>Couplings</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Elbows */}
      <div className="glass-card product-category-card">
        <div className="category-image">
          <img src="/images/products/GJ1590S.jpg" alt="Ductile iron elbow fitting" />
        </div>
        <h3>Elbows &amp; Bends</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Tees */}
      <div className="glass-card product-category-card">
        <div className="category-image">
          <img src="/images/tees.png" alt="Ductile iron tee fitting" />
        </div>
        <h3>Tees &amp; Crosses</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Mechanical Tees */}
      <div className="glass-card product-category-card">
        <div className="category-image">
          <img src="/images/mech%20tees.png" alt="Mechanical tee fitting" />
        </div>
        <h3>Mechanical Tees</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Reducers */}
      <div className="glass-card product-category-card">
        <div className="category-image">
          <img src="/images/reducres.png" alt="Ductile iron reducer fitting" />
        </div>
        <h3>Reducers</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Flanges */}
      <div className="glass-card product-category-card">
        <div className="category-image">
         <img src="/images/flanges.png" alt="Ductile iron flanged fitting" />
        </div>
        <h3>Flanges &amp; Adaptors</h3>
        <p>
          Explore individual product models, catalogue references
          and available technical details.
        </p>
        <Link className="text-link" href="/products">
          Explore range <ArrowUpRight size={14} />
        </Link>
      </div>

    </div>
  </div>
</section>


        {/* WHY GROVJOINT */}
        <section className="section">
          <div className="container content-grid">
            <div>
              <div className="eyebrow">Why Grovjoint</div>

              <h2>
                Designed for efficient installation and reliable service.
              </h2>

              <p>
                Our company catalogue highlights restrained connections,
                reduced installation costs and flexibility in grooved piping
                systems. The product range is presented for infrastructure,
                fire-protection and building-services applications.
              </p>

              
<div className="feature-list">
  <div className="feature-item">
    <ShieldCheck className="feature-icon" size={22} />
    <span>Reliable Connections</span>
  </div>

  <div className="feature-item">
    <CreditCard className="feature-icon" size={22} />
    <span>Reduced Installed Costs</span>
  </div>

  <div className="feature-item">
    <Wrench className="feature-icon" size={22} />
    <span>Ease and Speed of Installation</span>
  </div>

  <div className="feature-item">
    <Award className="feature-icon" size={22} />
    <span>Globally Certified</span>
  </div>

  <div className="feature-item">
    <Boxes className="feature-icon" size={22} />
    <span>Widerange of Product </span>
  </div>

  <div className="feature-item">
    <Truck className="feature-icon" size={22} />
    <span>Reliable &amp; On-Time Delivery</span>
  </div>
</div>


              <Link className="text-link" href="/about">
                Discover our company <ArrowUpRight size={14} />
              </Link>
            </div>

           <div className="image-panel">
  <img
    src="/images/about/grovjoint-products-about.png"
    alt="Grovjoint India ductile iron pipe fittings and couplings"
  />
</div>
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="section">
          <div className="container content-grid">
            <div>
              <div className="eyebrow">
                Based in Tuticorin, India
              </div>

              <h2>
                Connected to customers and project markets.
              </h2>

              <p>
                Grovjoint India Pipe Fittings PVT LTD is based in Tuticorin,
                Tamil Nadu. The catalogue also identifies a distributor
                in Riyadh, Saudi Arabia: JAD Al Riyadh Trading Co. Ltd.
              </p>

              <p>
                For export, distribution or project enquiries, contact
                our team with your destination market, product models,
                sizes and required quantities.
              </p>
            </div>

           
<div className="glass-card">
  <div className="distributor-logo">
    <img
      src="/images/cilents/jad.jpeg"
      alt="JAD Al Riyadh Trading Co. Ltd. logo"
    />
  </div>

  <h3>DISTRIBUTORS</h3>

  <p>
    <strong>JAD Al Riyadh Trading Co. Ltd.</strong>
  </p>

  <p>
    King Abdul Aziz Road, Sulimaniyah, Natcom Building,
    2nd Floor, Office #12, Riyadh, Saudi Arabia.
</p>

  <p>
    Email: <a href="mailto:sale@jad.com.sa">sale@jad.com.sa</a>
  </p>

  <p>
    Tel: +966 11 217 1101
  </p>

  <p>
    Fax: +966 11 217 1194
  </p>
</div>
    </div>
        </section>


                <HomeClientMarquee />

        {/* FINAL CALL TO ACTION */}
        <section className="section section-dark">
          <div className="container">
            <div className="cta-band">
              <div>
                <div className="eyebrow">Talk to our team</div>

                <h2>
                  Looking for the right grooved fitting?
                </h2>

                <p>
                  Share your product, size and project requirements
                  with our team.
                </p>
              </div>

              <Link className="button" href="/request-quote">
                Send an enquiry <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Shell>
  );
}
