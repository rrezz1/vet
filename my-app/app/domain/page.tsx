import Link from "next/link";

export default function Domain() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <main className="flex flex-col items-center justify-center w-full h-screen px-8 relative">
        
        <Link 
          href="/" 
          className="absolute top-8 left-8 p-3 hover:bg-white rounded-lg transition-all duration-300 border border-gray-200 hover:shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </Link>

        <div className="flex flex-col items-center justify-center text-center space-y-8 -mt-16">
          
          
          <div className="space-y-4">
            <h1 className="text-6xl font-light text-gray-900 tracking-tight">
              Domain
            </h1>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
            <p className="text-lg text-gray-500 font-light">
              For sale
            </p>
          </div>

        </div>

        <div className="absolute bottom-1/4">
          <a
            href="https://t.me/mrmmiyagii"
            // target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-56 items-center justify-center rounded-full bg-black px-8 text-white font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg"
          >
            Make Offer
          </a>
        </div>

      </main>
    </div>
  );
}