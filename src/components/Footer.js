import React from "react";

const Footer = () => {
  return (
    <footer id="footer" class="bg-green-700 text-xl text-white">
      <section class="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
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
        <nav class="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="/" class="hover:opacity-90">
            Home
          </a>
          <a href="user" class="hover:opacity-90">
            User
          </a>
          <a
            href="https://khang-me.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-90"
          >
            Profile
          </a>
        </nav>
        <div class="flex flex-col sm:gap-2">
          <p class="text-right">
            Copyright &copy;
            <span id="year">2023</span>
          </p>
          <p class="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
