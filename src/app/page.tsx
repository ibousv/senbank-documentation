'use client'
import Counter from "@/components/Counter";


export default function Home() {
  return (
    <div className=" items-center justify-items-center font-[family-name:var(--font-geist-sans)] ">
      <div className="font-bold text-4xl text-center">
        <Counter />
      </div>
    </div>
  );
}
