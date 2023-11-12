import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Loader/loader";

const Rooms = () => {

    const [params, setparams] = useSearchParams()
    const category = params.get('category')
    console.log(category);
    const [loeading, setLoading] = useState(false)

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filterData = data.filter(room => room.category === category)
                setRooms(filterData)
            } else {
                setRooms(data)
           }
           setLoading(false)
        } )
    }, [category])


    if(loeading){
       return <Loader></Loader>
    }

    return (
        <Container>
            {rooms && rooms.length > 0 ? <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-5">
            {
                rooms.map(room => <Card key={room._id} room={room}></Card>)
            }
            </div> : <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">

            <Heading title={"Data Not Found"}  center={true} subtitle={"Try anther category"}></Heading>
            </div>
            }
        </Container>
    );
};

export default Rooms;