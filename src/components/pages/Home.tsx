import type { ReactElement } from 'react';
import Heading from '../atoms/Heading';
import O1Form from '../organisms/o1-form';

export default function Home(): ReactElement {
  return (
    <>
      <Heading type="h1">Truth Table Generator</Heading>
      {/* eslint-disable-next-line no-console */}
      <O1Form onSubmit={(values) => console.log(values)} />
    </>
  );
}
