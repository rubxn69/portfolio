export default function Footer() {
  return (
    <footer className="bg-black text-center py-2 sm:py-4 border-t border-red-600">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Ruben Jacob | Built with React & Tailwind
      </p>
    </footer>
  );
}
