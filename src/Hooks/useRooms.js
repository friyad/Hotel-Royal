import { useEffect, useState } from "react";

const useRooms = () => {
    const [rooms, setRooms] = useState([])
    const [displayRooms, setDisplayRooms] = useState(null)

    useEffect(() => {
        fetch('/roomsData.json')
            .then(response => response.json())
            .then(data => {
                setRooms(data)
                setDisplayRooms(data)
            })
    }, [])

    return [rooms, displayRooms, setRooms, setDisplayRooms]
};

export default useRooms;