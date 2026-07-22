import { useDispatch, useSelector } from "react-redux";
import { pageChanged } from "../../features/filter/filterSlice";
import PAGE_SIZE from "../../utils/page_size";

export default function Pagination() {
  
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.filter);
  const { totalCount } = useSelector((state) => state.videos);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => dispatch(pageChanged(p))}
            className={
              p === page
                ? "bg-blue-600 text-white px-4 py-1 rounded-full"
                : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full"
            }
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
}
