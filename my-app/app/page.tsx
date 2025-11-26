import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center w-full h-screen px-8">
        <Link 
          href="/domain"
          className="flex items-center justify-center w-full h-full"
        >
          <Image
            className="opacity-90 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
            src="/vv.svg"
            alt="V Logo"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </main>
    </div>
  );
}