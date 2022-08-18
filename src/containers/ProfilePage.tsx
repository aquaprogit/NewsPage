import ProfilePageComponent from "../components/ProfileCardComponent";
import { User } from "../services/user";
import { useState, useEffect } from "react";
import { getPosts, PostData } from "../services/post";

export async function getUser(id: number): Promise<any> {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id.toString()
  );
  return await data.json();
}

function ProfilePage() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let mounted = true;
    getUser(parseInt(url.searchParams.get("id") ?? "-1")).then((items) => {
      if (mounted) {
        setUser(items);
      }
    });
  }, []);
  return (
    <div className="profile-page">
      <ProfilePageComponent user={user ?? new User()}></ProfilePageComponent>
    </div>
  );
}

export default ProfilePage;
