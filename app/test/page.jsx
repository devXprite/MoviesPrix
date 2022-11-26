// import Loader from "../../components/Loader";

export default function page(prop){
    return (
        <pre>
            {
                JSON.stringify(prop)
            }
        </pre>
    )
}