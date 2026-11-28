
import GlobalPresenceClientMarquee from '@/components/GlobalPresenceClientMarquee';
import { Shell } from '@/components/Site';
import { MapPin } from 'lucide-react';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';

export default function Global() {
  return (
    <Shell>
      <main className="global-page">

        {/* GLOBAL PRESENCE HERO */}
        <section className="global-hero">
          <div className="global-hero-inner">

            <div className="global-copy">
              <div className="global-eyebrow">
                <span></span>
                GLOBAL PRESENCE
                <span></span>
              </div>

              <h1>
                Serving piping-system requirements beyond borders.
              </h1>

              <p>
                Grovjoint India’s catalogue identifies its vision to become
                a leading provider of ductile iron pipe fittings in the
                Asian subcontinent.
              </p>

              <p>
                For export, distribution or project enquiries, contact our
                team with your destination market, product models, sizes
                and required quantities.
              </p>

              {/* JAD DISTRIBUTOR CARD */}
              <div className="global-distributor-card global-distributor-card-new">

                {/* JAD LOGO */}
                <div className="global-jad-logo-panel">
                  <img
                    src="/images/cilents/jad.jpeg"
                    alt="JAD Al Riyadh Trading Co. Ltd. logo"
                  />
                </div>

                {/* DISTRIBUTOR INFORMATION */}
                <div className="global-jad-info">

                  <div className="global-jad-heading">
                    <span>DISTRIBUTORS</span>
                    <h3>JAD Al Riyadh Trading Co. Ltd.</h3>
                  </div>

                  <p className="global-jad-address">
                    <MapPin size={18} />
                    <span>
                      King Abdul Aziz Road, Sulimaniyah, Natcom Building,
                      2nd Floor, Office #12, Riyadh, Saudi Arabia.
                    </span>
                  </p>

                  <div className="global-jad-contact">
                    <p>
                      Email: <a href="mailto:sale@jad.com.sa">
                       sale@jad.com.sa
                      </a>
                    </p>

                    <p>Tel: +966 11 217 1101</p>

                    <p>Fax: +966 11 217 1194</p>
                  </div>

                </div>
              </div>
            </div>

            
{/* WORLD MAP */}
<div className="global-map-area">
  <img
    className="global-presence-map"
    src="/images/global-presence-map.png"
    alt="Grovjoint India global presence showing international destinations from Tamil Nadu, India"
  />
</div>


            </div>
        </section>

        {/* MAJOR CLIENTS */}
        <section className="global-clients-section">
          <ClientLogoMarquee />
        </section>

      </main>
    </Shell>
  );
}
