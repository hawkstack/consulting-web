import {
  technologyCategories,
  technologyCoverageCopy as copy,
} from "../data/TechnologyCoverage.data";

export default function TechnologyCategories() {
  return (
    <nav
      aria-label={copy.technologyCategoriesLabel}
      className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-600 sm:gap-x-4 sm:text-sm"
    >
      {technologyCategories.map((category, index) => (
        <span key={category} className="contents">
          <span>{category}</span>
          {index < technologyCategories.length - 1 && (
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-blue-500"
            />
          )}
        </span>
      ))}
    </nav>
  );
}
