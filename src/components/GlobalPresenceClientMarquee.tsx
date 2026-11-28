
'use client';

const clients = [
  { name: 'JAD', image: 'jad.jpeg' },
  { name: 'Saudi Aramco', image: 'aramco.png' },
  { name: 'SABIC', image: 'sabio.jpeg' },
  { name: 'Saudi Electricity Company', image: 'Saudi electricity.png' },
  { name: 'Maaden', image: 'maaden.png' },
  { name: 'Nesma', image: 'nesma.webp' },
  { name: 'EMAAR', image: 'emmar.png' },
  { name: 'DAMAC', image: 'damac.png' },
   { name: 'DEWA', image: 'DEWA.jpg' },
  { name: 'Binghatti', image: 'Binghatti.jpg' },
  { name: 'Etihad Electricity', image: 'etihad.jpeg' },
  { name: 'SOBHA Realty', image: 'Sobha-Realty.jpg' },
  { name: 'Al Arabia', image: 'Al Arabia.png' },
  { name: 'Juma Al Majid Holding Group LLC', image: 'al majid.jpeg' },
  { name: 'Al-Futtaim', image: 'Al-futtaim.png' },
  { name: 'FIREX', image: 'firex.jpeg' },
  { name: 'Larsen & Toubro', image: 'l&t.png' },
  { name: 'Riyadh Metro', image: 'rigadh metro.png' },
  { name: 'Safe Guard', image: 'SAFE GUARD.jpeg' },
  { name: 'SIBCA', image: 'sibca.png' },
  { name: 'ZODCON Construction', image: 'zodcon.jpeg' },
  { name: 'Concorde', image: 'concorde.png' },
  { name: 'International security & safety system co', image: 'isssc.jpg' },
  { name: 'Corodex Agencies', image: 'Corodex Agencies.png' },
  { name: 'Al Bawani', image: 'albawani.jpeg' },
  { name: 'Nassar', image: 'ali al.jpeg' },
  { name: 'AlKifah Contracting', image: 'ALKIFAH CONTRACTING.png' },
  { name: 'Bin Jarallah Group', image: 'Bin Jarallah.jpeg' },
  { name: 'ETECHS', image: 'etechs.jpeg' },
  { name: 'First Gulf Company', image: 'first  gulf.png' },
  { name: 'G4S', image: 'g4s.png' },
  { name: 'IKK', image: 'isam khairi.png' },
  { name: 'ABSAL PAUL', image: 'absal.jpeg' },
  { name: 'Juffali', image: 'juffali.png' },
  { name: 'MID Contracting', image: 'mid contracting.jpeg' },
  { name: 'REDA Hazard Control', image: 'REDA.jpeg' },
  { name: 'S.S.E.M.', image: 'ssem.png' },
  { name: 'Tysseer', image: 'tyseer.png' },
];

const rows = Array.from({ length: 4 }, (_, rowIndex) =>
  clients.slice(rowIndex * 8, rowIndex * 8 + 8)
);

export default function GlobalPresenceClientMarquee() {
  return (
    <section className="client-marquee-section global-client-section">
      <div className="container">

        <div className="client-marquee-heading">
          <div className="eyebrow">Trusted partnerships</div>
          <h2>Our Major Clients</h2>
          <p>
            Proud to be associated with leading companies across industries
            and infrastructure sectors.
          </p>
        </div>

        <div className="global-client-rows">
          {rows.map((row, rowIndex) => (
            <div className="global-client-row" key={rowIndex}>
              <div
                className={`global-client-track ${
                  rowIndex % 2 === 1 ? 'reverse' : ''
                }`}
              >
                {[...row, ...row].map((client, index) => (
                  <div
                    className="global-client-card"
                    key={`${client.name}-${index}`}
                  >
                    <img
                      src={`/images/cilents/${encodeURIComponent(client.image)}`}
                      alt={client.name}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
