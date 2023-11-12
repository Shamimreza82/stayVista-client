import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";

const Rooms = () => {

    const [params, setparams] = useSearchParams()
    const category = params.get('category')
    console.log(category);

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filterData = data.filter(room => room.category === category)
                setRooms(filterData)
            } else {
                setRooms(data)
            }
        } )
    }, [category])

    return (
        <Container>
            <div  className="grid md:grid-cols-4 lg:grid-cols-4 gap-5">
            {
                rooms.map(room => <Card key={room._id} room={room}></Card>)
            }
            </div>
        </Container>
    );
};

export default Rooms;