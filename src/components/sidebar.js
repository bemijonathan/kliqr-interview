import moment from "moment"

const UsersComponent = (props) => {
    return (
        <>
            {
                props.users.length ? props.users.map((e, i) => {
                    return (
                        <div className="flex items-center cursor-pointer justify-between p-4 user" key={i} onClick={ f =>  props.newUser(e.id) }>
                            {/* {JSON.stringify(e)} */}
                            <div className="flex items-center" >
                                <div className="">
                                    <img src={e.avatar} className="rounded-full w-8 h-8 mr-4" alt="" />
                                </div>
                                <div>
                                    <h4 className="biotif-semibold text-base tracking-wide  mb-1">{e.first_name} {e.last_name}</h4>
                                    <div className="flex space-x-2 items-center">
                                        <p className="biotif __transact mb-0">{e.transaction} transactions</p>
                                        <i className="ri-checkbox-blank-circle-fill circle"></i>
                                        <p className="biotif __transact mb-0">Joined {moment(e.created_at).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </div>
                    )
                }) : <p className="mt-10 text-xl"> No Users yet </p>
            }

        </>
    )
}

export default function Sidebar(props) {

    return (
        <div className="__sidenav pt-12 pb-12">
            <div className="">
                <h4 className="biotif-semibold text-base p-4 ">{'Users'.toUpperCase()}</h4>
            </div>
            <UsersComponent users={props.userState}  newUser={props.newUser}/>
        </div>
    )
}
