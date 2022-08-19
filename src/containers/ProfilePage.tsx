import ProfilePageComponent from "../components/ProfileCardComponent";
import {User} from "../services/user";
import {useState, useEffect} from "react";
import Utils from "../services/utilities";

export async function getUser(id : number): Promise < User > {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + id.toString());
    return await data.json();
}

function ProfilePage() {
    const [user, setUser] = useState < User > ();
    useEffect(() => {
        let mounted = true;
        getUser(parseInt(Utils.getParameterValueFromLink(window.location.href, 'id') ?? "-1")).then((items) => {
            if (mounted) {
                setUser(items);
            }
        });
    }, []);
    return (
        <div className="profile-page">
            <ProfilePageComponent user={
                user ?? new User()
            }></ProfilePageComponent>
        </div>
    );
}

export default ProfilePage;
