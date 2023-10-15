import { name, me, about, info } from '../lib/info';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Home = () => {
   return (
      <main>
         <h1 className='text-[#E5E5E5] text-4xl  uppercase'>{name}</h1>
         <p className='text-[#E5E5E5] my-6 text-base'>{info()}</p>
         <div className='flex gap-5'>
            <Image className='rounded-full my-2' src={me} alt='portrait' width={110} height={110} />
            <div className='mt-6'>
               <Link href='https://github.com/devemit' target='_blank'>
                  <AiFillGithub
                     size={28}
                     className='text-[#A3A3A3] my-2 cursor-pointer hover:text-[#E5E5E5]'
                  />
               </Link>
               <Link href='https://www.linkedin.com/in/mitko-iliev/' target='_blank'>
                  <AiFillLinkedin
                     size={28}
                     className='text-[#A3A3A3] my-2 cursor-pointer hover:text-[#E5E5E5]'
                  />
               </Link>
            </div>
         </div>
         <p className='text-[#E5E5E5] my-4 text-base max-w-lg'>{about()}</p>
      </main>
   );
};

export default Home;
