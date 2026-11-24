import GlobalPresenceClientMarquee from '@/components/GlobalPresenceClientMarquee';
import { Shell } from '@/components/Site';
import { Globe2, MapPin, Handshake } from 'lucide-react';
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

              <div className="global-distributor-card">
                <div className="global-distributor-icon">
                  <Handshake size={38} />
                </div>

                <div className="global-distributor-label">
                  Distribution Contact
                  <strong>Listed in Catalogue</strong>
                </div>

                <div className="global-distributor-details">
                  <h3>JAD Al Riyadh Trading Co. Ltd.</h3>
                  <p>
                    <MapPin size={19} />
                    <span>
                      King Abdul Aziz Road, Sulimaniyah, Natcom Building,
                      2nd Floor, Office #12, Riyadh, Saudi Arabia.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* WORLD MAP */}
<div className="global-map-area">
  <img
    className="global-world-map-image"
    src="/images/world-map.svg"
    alt="World map showing Grovjoint India's international connections"
  />

<svg
  className="global-map-routes"
  viewBox="0 0 650 325"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  {/* Connecting route: Riyadh to Tuticorin */}
  <path
    d="M410 120 Q435 105 465 148"
    fill="none"
    stroke="#E87526"
    strokeWidth="3"
    strokeDasharray="6 5"
    strokeLinecap="round"
  />

  {/* Riyadh marker */}
  <circle cx="410" cy="120" r="10" fill="#E87526" stroke="#FFFFFF" strokeWidth="3" />
  <circle cx="410" cy="120" r="3" fill="#FFFFFF" />

  <rect x="285" y="90" width="112" height="43" rx="8" fill="#142B45" />
  <text x="295" y="107" fill="#FFFFFF" fontSize="13" fontWeight="600">
    Riyadh
  </text>
  <text x="295" y="122" fill="#FFFFFF" fontSize="12">
    Saudi Arabia
  </text>

  {/* Tuticorin marker */}
  <circle cx="465" cy="148" r="11" fill="#F39A32" stroke="#FFFFFF" strokeWidth="3" />
  <circle cx="465" cy="148" r="3.5" fill="#FFFFFF" />

  <rect x="480" y="132" width="130" height="43" rx="8" fill="#142B45" />
  <text x="490" y="149" fill="#FFFFFF" fontSize="13" fontWeight="600">
    Tuticorin
  </text>
  <text x="490" y="164" fill="#FFFFFF" fontSize="12">
    India
  </text>
</svg>
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