
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Shell, PageHero } from '@/components/Site';
import ProductImage from '@/components/ProductImage';
import { products, categories } from '@/lib/products';

export default function Products() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const shown = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat === 'All' || p.category === cat) &&
          `${p.name} ${p.model}`
            .toLowerCase()
            .includes(q.toLowerCase())
      ),
    [cat, q]
  );

  return (
    <Shell>
      <PageHero
        eyebrow="Product catalogue"
        title="Grooved ductile iron product range."
        copy="Explore the Grovjoint catalogue by product family. Model references and descriptions are based on the supplied 62-page company catalogue."
      />

      <section className="section">
        <div className="container">

          <div className="filter-row">
            <button
              className={cat === 'All' ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setCat('All')}
            >
              All products
            </button>

            {categories.map((c) => (
              <button
                key={c}
                className={cat === c ? 'filter-chip active' : 'filter-chip'}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div
            className="field"
            style={{ maxWidth: 420, marginBottom: 25 }}
          >
            <label>Search by product or model number</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. GJRC50G"
            />
          </div>

          <div className="product-grid">
           {shown.map((p) => (
  <Link
    key={p.model}
    href={`/products/${p.model.toLowerCase()}`}
    className="product-card product-card-link"
  >
    <ProductImage
      model={p.model}
      name={p.name}
      minHeight={170}
    />

    <div className="product-info">
      <div className="model">{p.model}</div>
      <h3>{p.name}</h3>
      <p>{p.summary}</p>

      <span className="text-link">
        View details <ArrowUpRight size={14} />
      </span>
    </div>
  </Link>
))}
          </div>

          {shown.length === 0 && (
            <p>No products found. Try another product name or model number.</p>
          )}

        </div>
      </section>
    </Shell>
  );
}
