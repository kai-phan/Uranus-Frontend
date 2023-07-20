import { Dribbble, Instagram, Linkedin } from '../icons';

export default function Footer() {
  return (
    <footer className="px-9 py-16 container m-auto">
      <div className="grid grid-cols-6 gap-4">
        <div className="desktop:col-span-2 col-span-6 flex flex-col gap-5">
          <p className="text-text-color-1 text-4xl font-bold">Move</p>
          <p className="text-text-color-3 text-xl leading-9 w-[280px]">
            Move - Multipurpose Design Template will help you develop your
            website design.
          </p>
          <div className="flex gap-5 mt-2">
            <a href="#" className="p-2 bg-[#F5F6FA] rounded-md">
              <Instagram classNames="[&_path]:fill-text-color-3" />
            </a>
            <a href="#" className="p-2 bg-[#F5F6FA] rounded-md">
              <Dribbble classNames="[&_path]:fill-text-color-3" />
            </a>
            <a href="#" className="p-2 bg-[#F5F6FA] rounded-md">
              <Linkedin classNames="[&_path]:fill-text-color-3" />
            </a>
            <a href="#" className="p-2 bg-[#F5F6FA] rounded-md">
              <Linkedin classNames="[&_path]:fill-text-color-3" />
            </a>
          </div>
        </div>
        <div className="desktop:col-span-1 col-span-6 flex flex-col">
          <p className="text-text-color-1 text-2xl font-bold">Home</p>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Desktop App
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Mobile App
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            SaaS
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Event
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Software
          </a>
        </div>
        <div className="desktop:col-span-1 col-span-6 flex flex-col">
          <p className="text-text-color-1 text-2xl font-bold">Pages</p>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            About Us
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Careers
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Case Studies
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Pricing
          </a>
        </div>
        <div className="desktop:col-span-1 col-span-6 flex flex-col">
          <p className="text-text-color-1 text-2xl font-bold">Blog</p>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Blog Listing
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Blog Article
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Newsroom
          </a>
        </div>
        <div className="desktop:col-span-1 col-span-6 flex flex-col">
          <p className="text-text-color-1 text-2xl font-bold">Portfolio</p>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Portfolio
          </a>
          <a href="#" className="text-text-color-3 text-xl leading-9 w-[280px]">
            Single Case
          </a>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg text-text-color-3">
          © 2019-2020 Wave Multipurpose Design Template.
        </p>
      </div>
    </footer>
  );
}
