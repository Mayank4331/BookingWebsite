import useFetch from "../../hooks/useFetch";
import"./feature.css";
const Feature=()=>{

    const {data,loading,error}=useFetch("/hotels/countByCity?cities=berlin,madrid,london")
    return(
    
    <div className="featured">
        {loading ?(
            "Loading please wait"
        ): (
            <><div className="featuredItem">
            <img src="https://imgs.search.brave.com/CBygWX5jXRDr-ExyKlFAfHGeb4hdS5Y5tzQxCL9EQVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8wNi8xNC8zMy9s/b2ctY2FiaW4tMTg4/NjYyMF82NDAuanBn" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://imgs.search.brave.com/CBygWX5jXRDr-ExyKlFAfHGeb4hdS5Y5tzQxCL9EQVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8wNi8xNC8zMy9s/b2ctY2FiaW4tMTg4/NjYyMF82NDAuanBn" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://imgs.search.brave.com/CBygWX5jXRDr-ExyKlFAfHGeb4hdS5Y5tzQxCL9EQVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8wNi8xNC8zMy9s/b2ctY2FiaW4tMTg4/NjYyMF82NDAuanBn" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
 
    </>
    )}
    </div>
    );
};
export default Feature;