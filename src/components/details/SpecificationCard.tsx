export const SpecificationCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-gray-900 rounded-xl min-[600px]:p-7 p-5 w-full">
      {children}
    </div>
  );
};
