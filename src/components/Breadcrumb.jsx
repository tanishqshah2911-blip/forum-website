import { Link } from 'react-router-dom';

export default function Breadcrumb({ trail }) {
  return (
    <nav className="breadcrumb container" aria-label="Breadcrumb">
      {trail.map((item, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={i}>
            {isLast ? (
              <span className="current">{item.label}</span>
            ) : (
              <>
                <Link to={item.to}>{item.label}</Link>
                <span className="sep">/</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
