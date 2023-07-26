import { Button } from 'src/components/common';
import CompanyReviews from 'src/components/CompanyReviews';
import Header from 'src/components/Header';
import {
  ArrowLeft,
  ArrowRight,
  Dribbble,
  Instagram,
  Linkedin,
} from 'src/components/icons';

function App() {
  return (
    <div>
      <Header />

      <div className="px-9 py-16 container m-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="desktop:col-span-2 col-span-4">
            <img
              src="src/assets/cover-img.png"
              alt="cover"
              className="rounded-md"
            />
          </div>
          <div className="desktop:col-span-2 desktop:p-24 col-span-4 flex flex-col justify-center gap-5">
            <p className="text-text-color-1 text-6xl font-bold leading-[73px]">
              A team that creates amazing products
            </p>
            <p className="text-text-color-3 text-xl leading-9">
              Get to know our team members better. Find out what we do and how
              we want to make the world a better place.
            </p>

            <a href="#" className="flex items-center">
              <p className="text-primary-1">Meet the crew</p>
              <ArrowRight
                width="14px"
                height="14px"
                classNames="[&_path]:fill-primary-1 text-sm ml-2"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f6fa]">
        <div className="px-9 py-16 container m-auto">
          <div className="flex flex-col items-center desktop:px-[90px] gap-5">
            <p className="text-text-color-1 text-6xl font-bold leading-[73px]">
              What we’re about
            </p>
            <p className="text-text-color-3 text-xl leading-9">
              View our weekdays at the office! We work hard every day to create
              great products that will help you in your work.
            </p>
            <div className="mt-4 relative">
              <img src="src/assets/slide.png" alt="" className="rounded-md" />
              <div className="absolute inset-0">
                <div className="h-5/6 relative">
                  <button className="absolute bg-white rounded-full p-3.5 -translate-y-2/4 top-2/4 left-[-20px] hover:opacity-90">
                    <ArrowLeft
                      width="18px"
                      height="18px"
                      classNames="[&_path]:fill-primary-1"
                    />
                  </button>
                  <button className="absolute bg-white rounded-full p-3.5 -translate-y-2/4 top-2/4 right-[-20px] hover:opacity-90">
                    <ArrowRight
                      width="18px"
                      height="18px"
                      classNames="[&_path]:fill-primary-1"
                    />
                  </button>
                </div>
                <div className="bg-white opacity-90 h-1/6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 py-16 container m-auto">
        <div className="flex flex-col items-center desktop:px-[90px] gap-5">
          <p className="text-text-color-1 text-6xl font-bold leading-[73px]">
            Our team member
          </p>
          <p className="text-text-color-3 text-xl leading-9">
            These are the people who work every day to create great products
            that will help you in your work.
          </p>
          <div className="w-full">
            <div className="grid grid-cols-6 gap-4">
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desktop:col-span-2 tablet:col-span-3 col-span-6 py-8">
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src="src/assets/avatar.png"
                    alt=""
                    className="w-[180px]"
                  />
                  <p className="text-text-color-1 text-xl leading-6 font-semibold">
                    Bogdan Krivenchenko
                  </p>
                  <p className="text-text-color-3 text-lg leading-5">
                    Co-Founder & CEO
                  </p>
                  <div className="flex gap-5 mt-2">
                    <a href="#">
                      <Instagram />
                    </a>
                    <a href="#">
                      <Dribbble />
                    </a>
                    <a href="#">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant="secondary">
            We think you'll fit in here. Submit your resume
          </Button>
        </div>
      </div>

      <CompanyReviews />

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
          <div className="desktop:col-span-1 tablet:col-span-3 col-span-6 flex flex-col">
            <p className="text-text-color-1 text-2xl font-bold">Home</p>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Desktop App
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Mobile App
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              SaaS
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Event
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Software
            </a>
          </div>
          <div className="desktop:col-span-1 tablet:col-span-3 col-span-6 flex flex-col">
            <p className="text-text-color-1 text-2xl font-bold">Pages</p>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Case Studies
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Pricing
            </a>
          </div>
          <div className="desktop:col-span-1 tablet:col-span-3 col-span-6 flex flex-col">
            <p className="text-text-color-1 text-2xl font-bold">Blog</p>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Blog Listing
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Blog Article
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Newsroom
            </a>
          </div>
          <div className="desktop:col-span-1 tablet:col-span-3 col-span-6 flex flex-col">
            <p className="text-text-color-1 text-2xl font-bold">Portfolio</p>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-text-color-3 text-xl leading-9 w-[280px]"
            >
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
    </div>
  );
}

export const Component = App;
