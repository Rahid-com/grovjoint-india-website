
'use client';

import { useState, type FormEvent } from 'react';
import { Shell, PageHero } from '@/components/Site';

export default function Quote() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed.');
      }

      setSent(true);
      setReference(result.reference);
      setMessage(result.message);
      form.reset();

    } catch (error) {
      setSent(false);
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Shell>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what your project needs."
        copy="Send your product and size requirements to the Grovjoint India team. Fields marked required must be completed."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 850 }}>
          <form
            className="contact-card"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label>Name *</label>
              <input
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label>Company *</label>
              <input
                name="company"
                required
                placeholder="Company name"
              />
            </div>

            <div className="field">
              <label>Email *</label>
              <input
                name="email"
                type="email"
                required
                placeholder="name@company.com"
              />
            </div>

            <div className="field">
              <label>Phone / WhatsApp *</label>
              <input
                name="phone"
                required
                placeholder="Country code + number"
              />
            </div>

            <div className="field">
              <label>Country *</label>
              <input
                name="country"
                required
                placeholder="Country"
              />
            </div>

            <div className="field">
              <label>Product family *</label>
              <select name="productFamily" required defaultValue="">
                <option value="" disabled>
                  Choose product family
                </option>
                <option value="Couplings">Couplings</option>
                <option value="Elbows & bends">Elbows & bends</option>
                <option value="Tees & crosses">Tees & crosses</option>
                <option value="Mechanical tees">Mechanical tees</option>
                <option value="Reducers">Reducers</option>
                <option value="Flanges & adaptors">
                  Flanges & adaptors
                </option>
                <option value="End caps">End caps</option>
              </select>
            </div>

            <div className="field">
              <label>Model number *</label>
              <input
                name="modelNumber"
                required
                placeholder="e.g. GJRC50G"
              />
            </div>

            <div className="field">
              <label>Required quantity *</label>
              <input
                name="quantity"
                type="number"
                min="1"
                required
                placeholder="Quantity and unit"
              />
            </div>

            <div className="field full">
              <label>Project / technical requirements</label>
              <textarea
                name="requirements"
                rows={5}
                placeholder="Product size, pressure class, standard, destination and any other requirements"
              />
            </div>

            <button
              className="button"
              type="submit"
              disabled={loading}
              style={{
                border: 0,
                marginTop: 22,
                cursor: loading ? 'wait' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? 'Submitting...' : 'Submit enquiry'}
            </button>

            {message && (
              <div
                className="notice"
                role="status"
                style={{ marginTop: 18 }}
              >
                {message}
                {sent && (
                  <p>
                    Your enquiry reference: <strong>{reference}</strong>
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </section>
    </Shell>
  );
}
