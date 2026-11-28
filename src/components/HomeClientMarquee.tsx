
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
  { name: 'DEWA', image: 'dewa.webp' },
  { name: 'Binghatti', image: 'Binghatti.jpg' },
  { name: 'Etihad Electricity', image: 'etihad.jpeg' },
  { name: 'SOBHA Realty', image: 'Sobha-Realty.jpg' },
  { name: 'Al Arabia', image: 'Al Arabia.png' },
  { name: 'Juma Al Majid', image: 'al majid.jpeg' },
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
    { name: 'nafi', image: 'nafisco.png' },
  { name: 'imdadat', image: 'imdadat.png' },
  { name: 'al-ahila', image: 'al-ahlia.jpeg' },
  { name: 'reftco', image: 'reftco.jpeg' },
  { name: 'SC EST', image: 'SC.jpeg' },
  { name: 'sffco', image: 'sffco.png' },
  { name: 'sterling', image: 'sterling.jpeg' },
  { name: 'sp', image: 'SP.png' },
  { name: 'first fix', image: 'ff.png' },
  { name: 'ezdihar', image: 'Ezdihar.jpeg' },
  { name: 'techno', image: 'techno.webp' },
  { name: 'Nassar', image: 'ali al.jpeg' },
  { name: 'AlKifah Contracting', image: 'ALKIFAH CONTRACTING.png' },
  { name: 'Bin Jarallah Group', image: 'Bin Jarallah.jpeg' },
  { name: 'ETECHS', image: 'etechs.jpeg' },
  { name: 'First Gulf Company', image: 'first  gulf.png' },
  { name: 'G4S', image: 'g4s.png' },
   { name: 'IEMS', image: 'iems.png' },
  { name: 'Pramount fire safety', image: 'para.png' },
  { name: 'IKK', image: 'isam khairi.png' },
  { name: 'ABSAL PAUL', image: 'absal.jpeg' },
  { name: 'Juffali', image: 'juffali.png' },
  { name: 'MID Contracting', image: 'mid contracting.jpeg' },
  { name: 'REDA Hazard Control', image: 'REDA.jpeg' },
  { name: 'S.S.E.M.', image: 'ssem.png' },
  { name: 'Tysseer', image: 'tyseer.png' },
];

export default function HomeClientMarquee() {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="home-client-section">
      <div className="container">
        <div className="home-client-heading">
          <div className="eyebrow">Trusted partnerships</div>
          <h2>Our Major Clients</h2>
          <p>
            Proud to be associated with leading companies
            across industries and infrastructure sectors.
          </p>
        </div>

        <div
          className="home-marquee"
          style={{
            display: 'block',
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            className="home-marquee-track"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              width: 'max-content',
              gap: '14px',
              animation: 'homeClientScroll 55s linear infinite',
            }}
          >
            {repeatedClients.map((client, index) => (
              <div
                className="home-client-card"
                key={`${client.name}-${index}`}
                style={{
                  display: 'flex',
                  flex: '0 0 175px',
                  width: '175px',
                  height: '110px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={`/images/cilents/${encodeURIComponent(client.image)}`}
                  alt={client.name}
                  draggable={false}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
