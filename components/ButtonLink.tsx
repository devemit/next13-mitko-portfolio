import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

interface ButtonProps {
  label: string;
  href: string;
}
const ButtonLink: React.FC<ButtonProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='w-[100%] flex justify-between items-center text-white border-gray-500 border hover:bg-[#737373] p-2 hover:-translate-y-1 transition ease-in-out'
    >
      <button>{label}</button>
      <FiArrowUpRight />
    </Link>
  );
};

export default ButtonLink;
