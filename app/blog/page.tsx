import Container from '@/components/container';
import Hero from '../../components/hero';
import TechButton from '@/components/TechButton';
import TechContainer from '@/components/TechContainer';
import cppicon from '@/Image/cpp.png';
import csharpicon from '@/Image/csharp.svg';
import pythonicon from '@/Image/python.png';
import rusticon from '@/Image/rust.png';
import typescripticon from '@/Image/typescript.png';
import reacticon from '@/Image/react.png';

export default function Blog() {
  return (
    <Container>
      <Hero

        title='Tech'
        subtitle='Recent Posts' />
      <div className={`
      flex flex-wrap
      gap-4
      `}>
        <TechContainer
          title='Work'>

          <TechButton
            name="C++"
            url="https://cpprefjp.github.io"
            icon={cppicon} />
          <TechButton
            name="C#"
            url="https://learn.microsoft.com/ja-jp/dotnet/csharp/language-reference/"
            icon={csharpicon} />
          <TechButton
            name="Python"
            url="https://www.python.org"
            icon={pythonicon} />

        </TechContainer>
        <TechContainer
          title='Learning'>
          <TechButton
            name="Rust"
            url="https://www.rust-lang.org"
            icon={rusticon} />
          <TechButton
            name="Typescript"
            url="https://www.typescriptlang.org"
            icon={typescripticon} />
          <TechButton
            name="React"
            url="https://react.dev"
            icon={reacticon} />
        </TechContainer>
      </div>
    </Container>
  );
}