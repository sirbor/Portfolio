import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'Rapid Research',
    role: 'Software Engineer',
    date: 'Nov 2022 → Date',
    logo: '/Rapid.png',
  },
  {
    company: 'Labs Afrika',
    role: 'Software Engineer',
    date: 'Aug 2021 → Oct 2022',
    logo: '/Labs.png',
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi there, I&apos;m Dominic. I build my own products, along side working
          with some amazing companies to help them build theirs.
        </p>
        <p>
        I have a solid foundation in Java and the Spring ecosystem, which has empowered me to develop and manage robust microservices that drive real business value.
        One of my proudest achievements was leveraging Spring Boot, JPA, and Hibernate to create a highly efficient RESTful web service that streamlined operations for
        a major client, significantly improving their transaction management processes. My experience with DevOps tools like Docker and AWS has allowed me to 
        implement cloud deployments that enhance application performance and scalability. Additionally, I’ve successfully integrated messaging systems like RabbitMQ and
        utilized data processing frameworks such as Hadoop and Spark to tackle complex data challenges, ensuring that my solutions not only meet technical specifications but also deliver impactful results for users.
        </p>

        <p>
        With a BSc in Information Technology from KCA University and training from the ALX Software Engineering program,
        I've developed a diverse set of technical skills:
        </p>
              <ul>
          <li><strong>Tools and Technologies:</strong> Java, Kotlin , Javascript , Dart , Springboot , Spring MVC , Angular, Jetpack Compose ,
Retrofit , Redis , Restful Services , Maven , Gradle , Docker , Postgres , Firebase , Mockito, JDBC , Microservices ,
Openshift , Apache Camel , Jest , RxJava , AWS , JUnit</li>
        </ul>

        <p>
          As a Github Campus Expert, I organize tech events and foster coding collaborations. 
          I thrive on challenges that push the boundaries of what's possible in software engineering, 
          consistently delivering robust and secure codebases while bridging communication gaps between technical and business teams.
        </p>

        <p>
          If you&apos;re interested in working together, feel free to reach out
          to me here:{' '}
          <Link href="https://calendly.com/kdominicbor/30min">Calendy</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
