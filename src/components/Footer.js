import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-green-700 text-xl text-white">
      <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Baokhang.</h2>
          777 TrackStarts street
          <br />
          HeetFleet, Muscle Mania 71968-2023
          <br />
          Email: <a href="mailto:hotwheels@mattel.com">My email</a>
          <br />
          Phone: <a href="tel:+84777777777">My phone</a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="/" className="hover:opacity-90">
            Home
          </a>
          <a href="user" className="hover:opacity-90">
            User
          </a>
          <a
            href="https://khang-me.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90"
          >
            Profile
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy;
            <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
