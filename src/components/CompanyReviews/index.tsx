import asgardia from '../../assets/logo/asgardia.png';
import kanba from '../../assets/logo/kanba.png';
import treva from '../../assets/logo/treva.png';
import CompanyItem from './CompanyItem';

export default function CompanyReviews() {
  const listCompany = [
    {
      logo: kanba,
      description:
        '“The latest project from the Plum Web Studio team exceeded all expectations and will help many people”',
    },
    {
      logo: asgardia,
      description:
        '“The latest project from the Plum Web Studio team exceeded all expectations and will help many people”',
    },
    {
      logo: treva,
      description:
        '“The latest project from the Plum Web Studio team exceeded all expectations and will help many people”',
    },
  ];

  return (
    <div className="bg-[#f5f6fa]">
      <div className="px-9 py-16 container m-auto">
        <div className="flex flex-col items-center px-[90px] gap-5">
          <p className="text-text-color-1 font-bold w-full text-3xl leading-9 desktop:text-6xl desktop:leading-[73px] desktop:w-[700px] text-center">
            Companies that have already rated us
          </p>
          <p className="text-text-color-3 w-full text-lg leading-6 desktop:text-xl desktop:leading-9 desktop:w-[770px] text-center">
            Read reviews of popular companies that have already appreciated
            working with our team and are happy with the result.
          </p>

          <div className="w-full">
            <div className="grid grid-cols-3 gap-4">
              {listCompany.map(({ logo, description }) => (
                <CompanyItem logo={logo} description={description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
