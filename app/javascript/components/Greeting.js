import React, { useEffect } from "react";
import { fetchGreeting } from "./redux/greetingStore";
import { useDispatch, useSelector } from "react-redux";

export default function Greeting() {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message);
    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);
    return (
        <div>
            <h1>Greeting: {message.greeting}</h1>
        </div>
    );
}