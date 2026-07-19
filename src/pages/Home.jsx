import Tags from "../components/tags/Tags";
import VideoGrid from "../components/grid/VideoGridItem";
import Pagination from "../components/ui/Pagination";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
