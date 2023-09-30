import Container from '@/components/container';
import Hero from '../components/hero';
export const runtime = 'edge';

export default function Home({}) {
  return (
    <Container>
      <Hero title='Drop' subtitle='自己紹介サイトです' imageOn />
    </Container>
  );
}
