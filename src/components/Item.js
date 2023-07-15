import "./Item.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

export default function Item(props){
    const {data = [],deleteTask,editTask } = props
    return(
        <>
        {data.title !== undefined && <div className="list-Item">
        <p className="title">{data.title}</p>
        <div className="button-container">
            {/* <button className="btn " onClick={()=>deleteTask(data.id)} >ลบ</button> */}
            <RiDeleteBin5Line className="btn" onClick={()=>deleteTask(data.id)} />
            {/* <button className="btn" onClick={()=>editTask(data.id)} >แก้ไข</button> */}
            <BiEdit className="btn" onClick={()=>editTask(data.id)}/>
        </div>
        </div>}
        </>
    )
}