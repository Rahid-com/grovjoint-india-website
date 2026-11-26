
import Image from 'next/image';
import { Shell, PageHero } from '@/components/Site';

const certs = [
  {
    name: 'UL grooved fittings compliance',
    image: '/images/certificates/ul-grooved.png'
  },
  {
    name: 'UL rubber-gasketed fittings compliance',
    image: '/images/certificates/ul-rubber-gasketed.png'
  },
  {
    name: 'FM Approved',
    image: '/images/certificates/fm-approved.png'
  },
  {
    name: 'CE compliance',
    image: '/images/certificates/ce-certificate-preview.jpg'
  },
  {
    name: 'WRAS',
    image: '/images/certificates/wras.jpeg'
  },
  {
    name: 'NSF International',
    image: '/images/certificates/nsf-international.png'
  },
  {
    name: 'ISO 9001:2015',
    image: '/images/certificates/iso-9001-2015.png'
  },
  {
    name: 'ISO 14001:2015',
    image: '/images/certificates/iso-14001-2015.png'
  },
  {
    name: 'ISO 45001:2018',
    image: '/images/certificates/iso-45001-2018.png'
  }
];

export default function Quality() {
  return (
    <Shell>
      <PageHero
        eyebrow="Quality & certifications"
        title="Quality evidence, presented transparently."
        copy="The certificates displayed here are extracted from the certificate pages of the supplied Grovjoint India catalogue."
      />

      <section className="section">
        <div className="container">
          <div className="certificate-grid">
            {certs.map((cert) => (
              <div className="certificate" key={cert.name}>
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={700}
                    height={900}
                  />
                </a>

                <h3>{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
