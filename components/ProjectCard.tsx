import { ProjectProps } from '@/types/ProjectProps';
import ButtonLink from './ButtonLink';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  seeCode,
  liveSite,
  imgUrl,
}) => {
  return (
    <div className='py-6'>
      <h2 className='my-2 text-xl'>{title}</h2>
      <Image src={imgUrl} alt='project-image' width={350} height={200} />
      <p className='my-2'>{description}</p>
      <div className='my-2'>
        Technology used:
        {tech.map((el, id) => (
          <button className='mx-1 text-sky-600' key={id}>
            {el}
          </button>
        ))}
        <div className='flex my-2 gap-1'>
          <Link href={seeCode} target='_blank' className='w-1/2'>
            <ButtonLink label='See Code' href={seeCode} />
          </Link>
          <Link href={liveSite} target='_blank' className='w-1/2'>
            <ButtonLink label='Live Preview' href={liveSite} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
