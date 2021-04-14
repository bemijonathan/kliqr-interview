const UsersComponent = (props) => {
    const default_image = 'https://cdn.dribbble.com/users/230875/screenshots/12078079/media/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg'
    return (
        <>
            {
                props.users.length ? props.users.map((e, i) => {
                    return (
                        <div className="flex items-center cursor-pointer justify-between mt-8 p-4 user" key={i}>
                            {/* {JSON.stringify(e)} */}
                            <div className="flex items-center" onClick={ f =>  props.newUser(e.id) }>
                                <div className="">
                                    <img src={e.avatar || default_image} className="rounded-full w-8 h-8 mr-4" alt="" />
                                </div>
                                <div>
                                    <h4 className="biotif-semibold text-base tracking-wide  mb-1">{e.first_name} {e.last_name}</h4>
                                    <div className="flex space-x-2 items-center">
                                        <p className="biotif __transact mb-0">{e.transaction} transactions</p>
                                        <i className="ri-checkbox-blank-circle-fill circle"></i>
                                        <p className="biotif __transact mb-0">Joined 2 months ago</p>
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
        <div className="overflow-hidden __sidenav pt-12 px-8">
            <div className="">
                <h4 className="biotif-semibold text-base pl-5">{'Users'.toUpperCase()}</h4>
            </div>
            <UsersComponent users={props.userState}  newUser={props.newUser}/>
        </div>
    )
}
