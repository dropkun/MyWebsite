import Container from '@/components/container';
import Hero from '../../components/hero';
import { TechButton } from '@/stories/TechButton';
import TechContainer from '@/components/TechContainer';
import cppicon from '@/public/cpp.png';
import csharpicon from '@/public/csharp.svg';
import pythonicon from '@/public/python.png';
import rusticon from '@/public/rust.png';
import typescripticon from '@/public/typescript.png';
import reacticon from '@/public/react.png';
import tailwindicon from '@/public/tailwind.png';
import nextjsicon from '@/public/nextjs.png';
import storybookicon from '@/public/storybook.png';
import gcpicon from '@/public/gcp.png';
import cloudflareicon from '@/public/cloudflare.png';

export default function Blog() {
  return (
    <Container>
      <Hero

        title='Tech'
        subtitle='私が使用している技術です。' />
      <div className={`
      flex flex-wrap
      gap-4
      `}>
        <TechContainer
          title='Language'>

          <TechButton
            name="C++"
            url="https://cpprefjp.github.io"
            icon={cppicon}
            status="In Work"
            favorite/>
          <TechButton
            name="C#"
            url="https://learn.microsoft.com/ja-jp/dotnet/csharp/language-reference/"
            icon={csharpicon}
            status="In Work" />
          <TechButton
            name="Python"
            url="https://www.python.org"
            icon={pythonicon}
            status="In Work" />
          <TechButton
            name="Typescript"
            url="https://www.typescriptlang.org"
            icon={typescripticon}
            status="Learning" />
          <TechButton
            name="Rust"
            url="https://www.rust-lang.org"
            icon={rusticon}
            status="Learning"
            favorite/>

        </TechContainer>
        <TechContainer
          title='Frontend'>
          <TechButton
            name="React"
            url="https://react.dev"
            icon={reacticon}
            status="Learning" />
          <TechButton
            name="tailwindcss"
            url='https://tailwindcss.com'
            icon={tailwindicon}
            status="Learning" />
          <TechButton
            name="Next.js"
            url='https://nextjs.org'
            icon={nextjsicon}
            status="Learning" />
          <TechButton
            name="Strorybook"
            url='https://storybook.js.org'
            icon={storybookicon}
            status="Learning" />
        </TechContainer>

        <TechContainer
          title='Infrastructure'>
          <TechButton
            name="GCP"
            url="https://console.cloud.google.com/welcome"
            icon={gcpicon}
            status="Learning" />
          <TechButton
            name="Cloudflare"
            url='https://www.cloudflare.com'
            icon={cloudflareicon}
            status="Want to learn" />
        </TechContainer>
      </div>
    </Container>
  );
}