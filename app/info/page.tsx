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
        I am a dedicated software engineer with a solid foundation in Java and the Spring ecosystem, empowering me to develop and manage robust microservices
        that drive real business value. Proficient in both Java and Kotlin, I have successfully leveraged Spring Boot, JPA, and Hibernate to create highly
        efficient RESTful web services, significantly improving transaction management processes for major clients. My expertise extends to front-end development
        with JavaScript, Dart, and Angular, as well as mobile application development using Jetpack Compose.

        </p>

        <p>
        I have a strong focus on cloud technologies and DevOps practices, utilizing Docker and AWS to implement cloud deployments
        that enhance application performance and scalability. My experience with PostgreSQL and Firebase allows me to efficiently manage data,
        while tools like Mockito and JUnit ensure robust testing and high-quality deliverables.
        </p>
              <ul>
          <li><strong>Tools and Technologies:</strong> Java, Kotlin , Javascript , Dart , Springboot , Spring MVC , Angular, Jetpack Compose ,
                      Retrofit , Redis , Restful Services , Maven , Gradle , Docker , Postgres , Firebase , Mockito, JDBC , Microservices ,
                      Openshift , Apache Camel , Jest , RxJava , AWS , JUnit</li>
        </ul>

        <p>
        Additionally, I’ve integrated messaging systems like RabbitMQ and utilized data processing frameworks such as Hadoop and Spark 
        to tackle complex data challenges. My commitment to continuous learning and collaboration enables me to deliver impactful results for users,
        ensuring that my solutions not only meet technical specifications but also drive innovation and efficiency in dynamic environments.

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
