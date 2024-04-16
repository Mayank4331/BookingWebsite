import useFetch from "../../hooks/useFetch";
import "./popertyList.css";
const PropertyList=()=>{
    const {data,loading,error}=useFetch(
        "/hotels/countByType"
        );
        const images =[
            "https://imgs.search.brave.com/aqRKCpw_9Pb57kzHw3Lt-cdne5bEI8Mbro2aCTzthMY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG5n/ZW5lcmFsLnJlbnRj/YWZlLmNvbS9kbXNs/aXZlY2FmZS8zLzE2/NTA5MTMvSU1HXzQx/NTQoMjAyMzAxMjMx/MDAwMDQ3NzkpLmpw/ZWc_d2lkdGg9Mzgw",
            "https://imgs.search.brave.com/qq5nm1xNmAke95W6u5JBcnYMpdsJ3OFat1WOnDElRD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWF1dGlmdWwt/bHV4dXJ5LWJlZHJv/b20tc3VpdGUtaG90/ZWwtd2l0aC10dl8x/MDU3NjItMTYzNy5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
            "https://imgs.search.brave.com/DaphuxrG0EzLVcXi_msu8yAvGGXFVOvKA-b9Zb9l0Yg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3RjdG91cmlzbS5j/b20vaW1hZ2UvY2F0/YWxvZy8xNDA2MjAy/Mi9JTUczLmpwZw",
            "https://imgs.search.brave.com/DaphuxrG0EzLVcXi_msu8yAvGGXFVOvKA-b9Zb9l0Yg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3RjdG91cmlzbS5j/b20vaW1hZ2UvY2F0/YWxvZy8xNDA2MjAy/Mi9JTUczLmpwZw",
            "https://imgs.search.brave.com/DaphuxrG0EzLVcXi_msu8yAvGGXFVOvKA-b9Zb9l0Yg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3RjdG91cmlzbS5j/b20vaW1hZ2UvY2F0/YWxvZy8xNDA2MjAy/Mi9JTUczLmpwZw"

        ]
    return(
        <div className="pList">
        {loading ?(
            "loading"
        ):(
            <>
           {data &&
           images.map((img,i)=>(
           <div className="pListItem" key={i}>
            <img src={img}
             alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>
        ))}
       
       </>
       )}
        </div>
    )
}
export default PropertyList;