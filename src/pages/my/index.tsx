import { FC } from "react";
import Tabbar from "@/component/tabbar";

const My: FC<any> = () => {
    return (
        <div>我的
            <Tabbar path='/my' />
        </div>
    );
};

export default My;