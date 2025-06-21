// import React from "react";

// function Products() {
//   return <div>Products Page...</div>;
// }

// export default Products;

export default function Page({ searchParams }) {
  // Equivalent to useParams()
  const { page,category } = searchParams;

  return (
    <div>
      <h1>Welcome, </h1>
      <h1>page no:{page} </h1>
      <h1>category:{category} </h1>

    </div>
  );
}
