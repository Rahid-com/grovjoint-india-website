
import ProductImage from '@/components/ProductImage';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Shell, PageHero } from '@/components/Site';
import { products } from '@/lib/products';
import { productSpecifications } from '@/lib/product-specifications';

export function generateStaticParams() {
  return products.map((p) => ({
    model: p.model.toLowerCase()
  }));
}

function formatSizeInInches(size: string) {
  if (size.includes('/')) {
    return size.split('/').pop()?.trim().replace(/'/g, '"') || size;
  }

  return size.replace(/'/g, '"');
}

export default function ProductDetail({
  params
}: {
  params: { model: string };
}) {
  const p = products.find(
    (x) => x.model.toLowerCase() === params.model
  );

  if (!p) return notFound();

  const technical = productSpecifications[p.model];

  const availableSizes = technical
    ? technical.availableSizes ??
      [...new Set(technical.sizes.map((size) => size.nominalSize))]
    : [];

  const specifications = technical
    ? technical.specifications.some(
        (item) => item.label.trim().toLowerCase() === 'model number'
      )
      ? technical.specifications.map((item) =>
          item.label.trim().toLowerCase() === 'model number'
            ? { ...item, value: p.model }
            : item
        )
      : [
          { label: 'Model number', value: p.model },
          ...technical.specifications
        ]
    : [];

  const certifications = [
    { name: 'UL Listed', image: 'ul.png' },
    { name: 'CE Certified', image: 'ce.png' },
    { name: 'FM Approved', image: 'fm.png' },
    { name: 'WRAS Approved', image: 'wras.png' },
    { name: 'NSF', image: 'nsf.png' }
  ];

  return (
    <Shell>
      <PageHero
        eyebrow={`${p.category} / ${p.model}`}
        title={p.name}
        copy={p.summary}
      />

      <section className="section">
        <div className="container">

          {/* PRODUCT INTRODUCTION */}
          <div className="content-grid product-detail-top">

            <div>
              <div className="eyebrow">
                Catalogue reference · Page {p.page}
              </div>

              <h1 className="product-detail-title">{p.name}</h1>

              <p>
                <strong style={{ color: 'var(--gold)' }}>
                  Model: {p.model}
                </strong>
              </p>

              <p>{p.summary}</p>

              <Link className="text-link" href="/products">
                <ArrowLeft size={14} /> Back to products
              </Link>
            </div>

            <ProductImage
              model={p.model}
              name={p.name}
              minHeight={380}
            />

          </div>

          {/* TECHNICAL INFORMATION */}
          {technical ? (
            <>
              <div className="product-info-grid">

                {/* ABOUT PRODUCT */}
                <div className="product-technical-section">
                  <div className="eyebrow">
                    PRODUCT INFORMATION
                  </div>

                  <h2>About this product</h2>

                  <div className="product-feature-list">
                    {technical.features.map((feature, index) => (
                      <div className="product-feature" key={index}>
                        <span>✓</span>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PRODUCT SPECIFICATIONS */}
                <div className="product-technical-section">
                  <div className="eyebrow">
                    TECHNICAL DATA
                  </div>

                  <h2>Product specifications</h2>

                  <div className="product-table-wrap">
                    <table className="product-spec-table">
                      <tbody>
                        {specifications.map((item, index) => (
                          <tr key={index}>
                            <th>{item.label}</th>
                            <td>{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                 
                 {/* DOWNLOAD AND ENQUIRY BUTTONS */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-middle',
                      alignItems: 'center',
                      gap: '12px',
                      marginTop: '24px',
                      flexWrap: 'wrap'
                    }}
>
                    <a
                      href={`/downloads/${p.model}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      Download Catalogue PDF
                    </a>

                    <Link
                      className="button"
                      href={`/request-quote?model=${p.model}`}
                    >
                      Enquire about this model
                    </Link>
                  </div>

                </div>

              </div>

              {/* AVAILABLE SIZES */}
              <div className="product-technical-section product-available-section">

                <h2>Available Sizes</h2>

                {availableSizes.length > 0 ? (
                  <div className="available-size-list">
                    {availableSizes.map((size) => (
                      <span
                        className="available-size-chip"
                        key={size}
                      >
                        {formatSizeInInches(size)}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="notice">
                    Available sizes are being verified against
                    the official catalogue.
                  </div>
                )}

              </div>
            </>
          ) : (
            <div className="notice">
              Technical specifications and available sizes for this
              model are being verified against the official catalogue.
            </div>
          )}

          {/* CERTIFICATIONS & APPROVALS */}
          <div className="product-technical-section product-certifications">

            <h2>Certifications & Approvals</h2>

            <div className="certification-logos">
              {certifications.map((cert) => (
                <div className="certification-item" key={cert.name}>
                  <img
                    src={`/images/certificates/${cert.image}`}
                    alt={cert.name}
                  />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </Shell>
  );
}
