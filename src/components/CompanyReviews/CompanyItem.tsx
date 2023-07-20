type Props = {
  logo: string;
  description: string;
};

export default function CompanyItem({ logo, description }: Props) {
  return (
    <div className="desktop:col-span-1 col-span-3">
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex justify-center items-center min-h-[230px] bg-white w-full">
          <img src={logo} alt="" className="w-[200px]" />
        </div>
        <p className="text-text-color-3 text-lg leading-5 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
