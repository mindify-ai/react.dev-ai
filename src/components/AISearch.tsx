import {MendableSearchBar} from '@mendable/search';

// Read the api key from the environment
const anon_key = process.env.REACT_APP_ANON_KEY;

export default function Search() {
  // @ts-ignore
  return <MendableSearchBar anon_key={anon_key} />;
}
