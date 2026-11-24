
'use client';

import { useState } from 'react';

type ProductImageProps = {
  model: string;
  name: string;
  minHeight?: number;
};

export default function ProductImage({
  model,
  name,
  minHeight = 230
}: ProductImageProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className="product-visual"
      style={{
        width: '100%',
        height: `${minHeight}px`,
        minHeight: `${minHeight}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 7,
        background: '#f1eadf'
      }}
    >
      {!imageFailed ? (
        <img
          src={`/images/products/${model}.jpg`}
          alt={`${name} - ${model}`}
          onError={() => setImageFailed(true)}
          style={{
            width: '150%',
            height: '150%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            padding: 0
          }}
        />
      ) : (
        <span>Verified product image to be added</span>
      )}
    </div>
  );
}
