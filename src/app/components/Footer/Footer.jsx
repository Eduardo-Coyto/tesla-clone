function Footer() {
  return (
    <footer class="flex pb-10 justify-center items-center">
      <ul class="flex flex-col justify-center items-center md:flex-row md:space-x-4  text-[12px] text-gray-500">
        <li class="link">Tesla &copy 2022</li>
        <li class="link">Privacy & Legal</li>
        <li class="link">Contact</li>
        <li class="link">Careers</li>
        <li class="link">News</li>
        <li class="link hidden md:inline">Engage</li>
        <li class="link hidden md:inline">Location</li>
      </ul>
    </footer>
  );
}

export default Footer;
