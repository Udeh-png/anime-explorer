export const SpecificationCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-card-background rounded-xl min-[600px]:p-7 p-5 w-full">
      {children}
    </div>
  );
};
