import React, { FC } from 'react';
import { useCachingFetch } from '../caching-fetch-library/cachingFetch';
import { validateData } from './validation';
import Name from './Name';

const Person: FC<{ index: number }> = ({ index }) => {
  // We are intentionally passing down the index prop to the Person component
  // To simulate the useCachingFetch hook being used in different locations
  const {
    data: rawData,
    isLoading,
    error,
  } = useCachingFetch(
    'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123',
  );
  if (isLoading) return <div>Loading...</div>;
  if (error || rawData === null) return <div>Error: {error?.message}</div>;

  const data = validateData(rawData);

  const person = data[index];

  return (
    <div>
      <Name index={index} />
      <p>{person.email}</p>
      <p>{person.address}</p>
      <p>{person.balance}</p>
      <p>{person.created}</p>
    </div>
  );
};

export default Person;
