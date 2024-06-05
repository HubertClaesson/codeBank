import { useFetch } from "./useFetch";
import { useToggle } from "./useToggle";


const FetchToggleHookComponent = () => {

    const [value, toggleValue] = useToggle(false);

    const { data, loading, fetchFunction } = useFetch('https://icanhazdadjoke.com/');

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <article className="border-black p-2">
                <div className="under-title pb-2">Fetch hook</div>

                {data && <div>{data.joke}: {data.setup}</div>}

                <button onClick={fetchFunction} className="btn-pill">new joke</button>

                <div onClick={toggleValue} className="mt-2 mb-s">Toggle Hook...</div>
                {value === true && (
                    <div className="">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Sequi perspiciatis consequuntur
                        deleniti neque atque voluptates
                        optio possimus vel reprehenderit
                        sapiente animi dolor fugiat aperiam
                        dolorem, alias facilis libero commodi
                        soluta!
                    </div>
                )}
            </article>
        </>
    )
}

export default FetchToggleHookComponent;