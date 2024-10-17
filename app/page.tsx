import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Kiondoo',
    href: '',
    description: 'A thrift online store for a local business.',
    image: '/Kiondoo.png',
  },
  {
    title: 'Makeja',
    href: '',
    description:
      'A real estate mobile app showcasing properties for sale and rent.',
    image: '/Keja.png',
  },
  {
    title: 'Finje',
    href: '',
    description:
      'A mobile app that helps users track their expenses and manage their finances.',
    image: '/Finje.png',
  },
  {
    title: 'Jikoni',
    href: '',
    description: 'A food delivery application to serve traditional cuisines within the city.',
    image: '/Jikoni.png',
  },
];

export default async function Home() {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Hi, I’m Dominic Bor.
          <span className="block text-slate-500 font-normal text-2xl">
            A Software engineer remote based from New York.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I have a solid foundation in Java and the Spring ecosystem, empowering
          me to develop robust microservices that drive real business value. My
          achievements include leveraging Spring Boot, JPA, and Hibernate to create
          efficient RESTful web services, streamlining operations for major clients.
          With experience in DevOps tools like Docker and AWS, I implement scalable
          cloud deployments. I've also integrated messaging systems like RabbitMQ
          and utilized data processing frameworks such as Hadoop and Spark to tackle
          complex challenges, delivering impactful results that meet both technical
          specifications and user needs.
        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16">
        <Title as="h2" variant="secondary" className="mb-4">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
      </section>

      <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
