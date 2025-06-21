"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function goToProducts() {
    router.push("/products");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to NextJS 14</h1>
      <Link href={"/about"}>Go to About Page</Link>
      <button onClick={goToProducts}>
        Using useRouter go to Products Page
      </button>
    </div>
  );
}
