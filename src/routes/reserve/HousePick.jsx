import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const HousePick = () => {
    const [selectedHouse, setSelectedHouse] = useState(null);
    const houses = useSelector((state) => state.house);
    return (
        <div className="reserve">
            <h1>Choose your desired house</h1>
            <p>Reservations will be depending on the availability of the houses</p>
            <div className="houses">
                {houses.map((house) => (
                    <div className="house" key={house.id}>
                        <div className="house-image">
                            <img src={house.image} alt={house.name} />
                        </div>
                        <div className="house-info">
                            <h3>{house.name}</h3>
                            <p>{house.description}</p>
                            <p>Price: {house.price}</p>
                            <button
                                className="btn"
                                onClick={() => setSelectedHouse(house)}
                            >
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedHouse && (
                <div className="selected-house">
                    <h3>{selectedHouse.name}</h3>
                    <p>{selectedHouse.description}</p>
                    <p>Price: {selectedHouse.price}</p>
                </div>
            )}
        </div>
    )
}



export default HousePick;