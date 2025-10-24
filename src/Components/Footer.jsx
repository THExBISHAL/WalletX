function Footer() {
  return (
    <footer className="bg-blue-950 py-8">
      <div className="mx-auto px-6 flex flex-col items-center text-center space-y-5">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
