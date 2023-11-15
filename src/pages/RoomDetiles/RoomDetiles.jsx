
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';



const RoomDetiles = () => {

    const {id} = useParams()
    console.log(id);

    // const [room, setRoom] = useState([])
    // const {rooms, isLoading, refetch} = useRoomsData()
    // console.log(rooms);


    useEffect(() => {
            axios.get('http://localhost:5000/rooms')
           .then(res => console.log(res))

    },[])



    // const {data} = useQuery({
    //     queryKey: ["room"], 
    //     queryFn: async () => {
    //          const res = await axios.get('http://localhost:5000/rooms')
    //          console.log(res);
    //     }
    // })

    // console.log(data);



    // useEffect(() => {
    //    fetch('/rooms.json')
    //    .then(res => res.json())
    //    .then(data => {
    //     console.log(data);
    //     const singleRooms = data.find(room => room._id === id)
    //     setRoom(singleRooms)
    //    })
    // },[id])



    return (
        <div>
            <Helmet>
                <title>Stay Vista | Room Detail</title>
            </Helmet>
            <Container>
            {/* <Header roomData={room}></Header> */}
            </Container>
        </div>
    );
};

export default RoomDetiles;