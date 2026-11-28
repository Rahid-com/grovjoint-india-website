
import Link from 'next/link';
import {
  Target,
  Eye,
  Handshake,
  ShieldCheck,
  Factory,
  Network,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import { Shell, PageHero } from '@/components/Site';

export default function About() {
  return (
    <Shell>
      <main>
        {/* COMPANY INTRODUCTION */}
        <PageHero
          eyebrow="About Grovjoint India"
          title="Connecting industries through dependable piping solutions."
          copy="Grovjoint India Pipe Fittings PVT LTD. focuses on ductile iron grooved fittings, couplings and flanged products for infrastructure, fire-protection and building-services applications."
        />

        {/* COMPANY PROFILE */}
        <section className="section">
          <div className="container content-grid">
            <div>
              <div className="eyebrow">Who we are</div>

              <h2>
                A company focused on quality, service and lasting
                connections.
              </h2>

              <p>
                At Grovjoint India Pipe Fittings Pvt. Ltd., we don’t just manufacture pipe fittings—we engineer the backbone of modern infrastructure. Specializing in high-performance ductile iron piping solutions, our products are built to thrive in the world’s most demanding environments, from high-pressure fire protection networks and commercial HVAC systems to heavy industrial and waterworks projects.
              </p>

              <p>
                Our comprehensive portfolio of grooved pipe fittings, mechanical couplings, and flanges is designed with two non-negotiable goals: uncompromising leak-tight security and dramatically faster installation. By replacing complex welding and threading with precision-engineered mechanical joints, Grovjoint empowers project teams to cut labor hours, reduce downtime, and build safer, more resilient piping systems on every job site.
              </p>

              <p>
                Quality isn’t an afterthought—it is embedded into every stage of our manufacturing process. Backed by strict adherence to global engineering benchmarks (including ASTM, AWWA, ASME, and EN standards), every fitting undergoes rigorous dimensional and pressure testing before it leaves our facility.
              </p>
              <p>
                Today, we proudly supply contractors, MEP engineers, and global distributors across India, the Middle East, Europe, and North America. Combining manufacturing excellence with responsive, hands-on technical support, Grovjoint delivers the right specifications, complete documentation, and dependable material supply to keep your projects moving on schedule.
              </p>

              <Link className="text-link" href="/products">
                Explore our products <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="image-panel">
              <img
                src="/images/about/grovjoint-products-about.png"
                alt="Grovjoint India ductile iron pipe fittings and couplings"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </section>

        {/* COMPANY FOCUS */}
        <section className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our business focus</div>

              <h2>
                The foundations of our product and service approach.
              </h2>

              <p>
                Our company centres on understanding piping requirements
                and presenting suitable product solutions.
              </p>
            </div>

            <div className="cards">
              <div className="glass-card">
                <div className="iconbox">
                  <Factory size={21} />
                </div>
                <h3>Product portfolio</h3>
                <p>
                  Grooved pipe fittings, couplings and flanges.
                </p>
              </div>

              <div className="glass-card">
                <div className="iconbox">
                  <ShieldCheck size={21} />
                </div>
                <h3>Quality commitment</h3>
                <p>
                  Attention to product suitability, catalogue
                  specifications and customer requirements.
                </p>
              </div>

              <div className="glass-card">
                <div className="iconbox">
                  <Network size={21} />
                </div>
                <h3>Industry applications</h3>
                <p>
                  Product solutions for infrastructure,
                  fire-protection and building-services piping systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our direction</div>
              <h2>What drives Grovjoint India.</h2>
            </div>

            <div className="cards">
              <div className="glass-card">
                <div className="iconbox">
                  <Target size={21} />
                </div>
                <h3>Our mission</h3>
                <p>
                  To serve customer requirements with practical
                  grooved piping products, relevant technical
                  information and responsive support.
                </p>
              </div>

              <div className="glass-card">
                <div className="iconbox">
                  <Eye size={21} />
                </div>
                <h3>Our vision</h3>
                <p>
                  To work towards becoming a recognised provider of
                  ductile iron pipe fittings in the Asian subcontinent.
                </p>
              </div>

              <div className="glass-card">
                <div className="iconbox">
                  <Handshake size={21} />
                </div>
                <h3>Our relationships</h3>
                <p>
                  To build lasting partnerships through communication,
                  product knowledge and consistent attention to
                  customer needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section section-dark">
          <div className="container content-grid">
            <div>
              <div className="eyebrow">Why work with us</div>

              <h2>
                Focused on the requirements behind every connection.
              </h2>

              <p>
                Selecting the right piping components involves
                understanding product models, dimensions, applications
                and project requirements.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <CheckCircle2 size={17} />
                  Catalogue-based product references
                </div>

                <div className="feature-item">
                  <CheckCircle2 size={17} />
                  Multiple ductile iron product categories
                </div>

                <div className="feature-item">
                  <CheckCircle2 size={17} />
                  Product information for project enquiries
                </div>

                <div className="feature-item">
                  <CheckCircle2 size={17} />
                  Customer-focused enquiry support
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div className="eyebrow">Grovjoint India</div>

              <h3>
                Let’s discuss your piping requirements.
              </h3>

              <p>
                Share your required product models, sizes,
                quantities and project details with our team.
              </p>

              <Link className="button about-quote-button" href="/request-quote">
                Request a Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
