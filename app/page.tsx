import Container from '@/components/container';
import Hero from '../components/hero';

async function getHelloWorld() {
  const res = await fetch('http://.../api/hello');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

export default function Home({
}){
  //const data = await getHelloWorld();
  return (
    <Container>
      <Hero
        title="Drop"
        subtitle="自己紹介サイトです"
        imageOn/>
        {/* <p>{data.message}</p> */}
    </Container>
  );
}
