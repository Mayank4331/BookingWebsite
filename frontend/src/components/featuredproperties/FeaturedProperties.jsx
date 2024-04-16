import useFetch from "../../hooks/useFetch";
import "./featuredproperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                // src={item.photos[0]}
                src="https://imgs.search.brave.com/F5qdccV8gaM7lu9C_FMRQcVpu7kG_bFHOjgZkH10s24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVpaG90ZWxzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMS9saWJlcnR5/LWhvdGVsLWN1cG9s/YS5qcGc"
                alt=""
                className="fpImg"
              />
          
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;