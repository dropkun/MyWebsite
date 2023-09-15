import Container from '@/components/container';
import Hero from '../components/hero';
import { useState, useEffect} from 'react';
import { get } from 'http';

async function getHelloWorld() {
  const res = await fetch('http://localhost:3000/api/hello');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

export default async function Home({title, subtitle, imageOn = false}: {title: string, subtitle: string, imageOn: boolean}) {
  const data = await getHelloWorld();
  return (
    <Container>
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn/>
        <p>{data.message}</p>
    </Container>
  );
}
