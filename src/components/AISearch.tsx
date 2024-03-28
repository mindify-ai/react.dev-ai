import {MendableSearchBar} from '@mendable/search';

// Read the açpi key from the environment variables set in the .env file or server's environment
const anon_key = process.env.MENDABLE_KEY;

export default function Search() {
  // @ts-ignore
  return <MendableSearchBar anon_key={anon_key} />;
}
