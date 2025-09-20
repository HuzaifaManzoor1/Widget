import Link from "next/link";

export default function Footer(){
    return(
        <>
         <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Widget Platform. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
        </>
    );
}