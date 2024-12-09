"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {
    const router = useRouter();
    // const subscribeModal = useSubscribeModal();

    const {isLoading, subscription, user} = useUser();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(!isLoading && !user){
            router.replace('/');
        }
    }, [isLoading, user, router]);

    return (
        <div>Account Content</div>
    )
}
export default AccountContent;