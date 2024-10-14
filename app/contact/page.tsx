import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Mail',
    link: 'mailto:mail@dominicbor.me',
    label: 'Send an email',
  },
  {
    method: 'Resume',
    link: '/Dominic_Bor_Resume.pdf',
    label: 'Check out my Resume',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/sirbor',
    label: 'Git - Dominic Bor',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sirbor/',
    label: 'Linkedin - Dominic Bor',
  },
  {
    method: 'Read my Books',
    link: 'https://www.readthistwice.com/kdominicbor/my-reads',
    label: 'Links to my current reads',
  },
  {
    method: 'Calendy',
    link: 'https://calendly.com/kdominicbor/30min',
    label: 'Calendy - Dominic Bor',
  },
  {
    method: 'Mobile',
    link: '+254 738 292 843',
    label: '+254 738 292 843',
  },
  {
    method: 'Buy me a Coffee',
    link: 'https://www.buymeacoffee.com/sirbor',
    label: 'Coffee  - Dominic Bor',
  },
];
export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4">
          If you&apos;d like to get in touch, you can reach me using the
          following methods. Please note, that I&apos;m not currently available
          for freelance projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link href={contactMethod.link} className="text-slate-700">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
