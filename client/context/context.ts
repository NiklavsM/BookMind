import * as React from "react";

export default React.createContext({
    name: "",
    setName: (name: string) => {
    },
    email: "",
    setEmail: (email: string) => {
    },
    profileUrl: "",
    setProfileUrl: (profileUrl: string) => {
    },
});