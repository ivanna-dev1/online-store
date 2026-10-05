import { Link } from "react-router-dom";
import { catalogLink } from "../utils";

const linkClass = "hover:text-pink-600 transition-colors";
const currentClass = "text-pink-700 font-bold";

export const Breadcrumbs = ({ group, category, productName }) => {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
      <Link to="/" className={linkClass}>
        Головна
      </Link>

      <span className="text-gray-400">/</span>
      {group || category || productName ? (
        <Link to="/catalog" className={linkClass}>
          Каталог
        </Link>
      ) : (
        <span className={currentClass}>Каталог</span>
      )}

      {group && (
        <>
          <span className="text-gray-400">/</span>
          {category || productName ? (
            <Link to={catalogLink(group)} className={linkClass}>
              {group}
            </Link>
          ) : (
            <span className={currentClass}>{group}</span>
          )}
        </>
      )}

      {category && (
        <>
          <span className="text-gray-400">/</span>
          {productName ? (
            <Link to={catalogLink(group, category)} className={linkClass}>
              {category}
            </Link>
          ) : (
            <span className={currentClass}>{category}</span>
          )}
        </>
      )}

      {productName && (
        <>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-bold truncate max-w-[150px]">
            {productName}
          </span>
        </>
      )}
    </nav>
  );
};
