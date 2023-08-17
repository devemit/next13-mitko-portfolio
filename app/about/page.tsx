import { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';

export const metadata: Metadata = {
  title: 'About | Mitko',
  description: 'Generated by create next app',
};

const page = () => {
  return (
    <section>
      <h1 className='text-white text-4xl'>About Me.</h1>
      <p className='text-[#E5E5E5] my-4 '>
        Hi, I&apos;m Mitko, a frontend developer specializing in{' '}
        <span className='text-sky-600'>
          React, TypeScript, Next.js, React Native, CSS, and Tailwind CSS.
        </span>{' '}
        With 2 years of experience, I create dynamic and interactive user
        interfaces.
      </p>
      <p className='text-[#E5E5E5] my-4'>
        I excel in building scalable applications using React and TypeScript.
        I&apos;m also proficient in Next.js for server-side rendering and static
        site generation. Additionally, I develop cross-platform mobile apps with
        React Native. Building state-of-the-art, easy to use, user-friendly
        websites and applications is truly a passion of mine.
      </p>
      <p className='text-[#E5E5E5] my-4'>
        I have a strong command over CSS and utilize Tailwind CSS for rapid
        development. I pay attention to detail, ensuring visually appealing and
        responsive designs.
      </p>
      <p className='text-[#E5E5E5] my-4'>
        Collaborating with diverse teams, I prioritize clean code and best
        practices. I&apos;m always eager to learn and stay up-to-date with
        industry trends.
      </p>
      <p className='text-[#E5E5E5] my-4'>
        If you&apos;re looking for a passionate frontend developer with
        expertise in React, TypeScript, Next.js, React Native, CSS, and Tailwind
        CSS, let&apos;s connect. Thank you for considering my profile!"
      </p>
      <div className='flex gap-2'>
        <ButtonLink label={'Github'} href={'https://github.com/devemit'} />
        <ButtonLink
          label={'Linkedin'}
          href={'https://www.linkedin.com/in/mitko-iliev/'}
        />
      </div>
    </section>
  );
};

export default page;
