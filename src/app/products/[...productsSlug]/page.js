// import React from "react";

// function ProductReview({ params }) {
//   return (
//     <div>
//       <h1>this is product review page</h1>
//       <h1>params are:{JSON.stringify(params.productsSlug)}</h1>
//     </div>
//   );
// }

// export default ProductReview;

export default function ProductReview({ params }) {
  const path = `/products/${params.slug}`;

  return <p>Current Path: {path}</p>;
}
