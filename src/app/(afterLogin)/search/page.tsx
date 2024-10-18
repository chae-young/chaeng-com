import RightSearhZone from "./_component/RightSearhZone";
import SearchForm from "./_component/SearchForm";
import SearchResult from "./_component/SearchResult";

interface Props {
  searchParams: { q: string, f?: string, pf?: string }
}
export default function Search( {searchParams }: Props) { 
  return (
    <>
      <SearchForm />
      <div>
        <SearchResult searchParams={searchParams}/>
      </div>
    </>
  )
};
