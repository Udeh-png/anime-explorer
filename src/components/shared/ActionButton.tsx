export const ActionButton = ({
  condition,
  onClick,
  iconOne,
  iconTwo,
}: {
  condition: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  iconOne?: React.ReactNode;
  iconTwo?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-blue-500 text-blue-500 flex justify-center items-center cursor-pointer"
    >
      {condition === true ? iconTwo : iconOne}
    </button>
  );
};
