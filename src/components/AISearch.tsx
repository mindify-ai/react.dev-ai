import {MendableSearchBar} from '@mendable/search';

// Read the açpi key from the environment variables set in the .env file or server's environment
const anon_key =
  process.env.MENDABLE_KEY || '95c86635-583e-42d5-ac07-b000741a1635';

export default function Search() {
  // @ts-ignore
  return <MendableSearchBar anon_key={anon_key} />;
}
