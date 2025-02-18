import {CORE_CONCEPTS} from "../data.js";
import CoreComponent from '../components/CoreComponent';

export default function CoreConcepts(){
    return(
        <>
        <section id="core-concepts">
            <ul>
            {CORE_CONCEPTS.map((conceptItem)=> (
                <CoreComponent key={conceptItem.title} {...conceptItem}/>
            ))}
            </ul>
        </section>
        </>
    )
}