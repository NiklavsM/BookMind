import * as React from "react";
import {useState} from "react";
import Context from './context';

const GlobalState = ({children}) => {
    const [name, setName] = useState("Bob")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("https://robohash.org/1cfb370cb8aaaef5a7b46a7535b8b4b7?set=set4&bgset=&size=200x200")

    return (
        <Context.Provider
            value={{
                name,
                setName,
                email,
                setEmail,
                profileUrl,
                setProfileUrl
            }}
        >
            {children}
        </Context.Provider>
    );

}
export default GlobalState;