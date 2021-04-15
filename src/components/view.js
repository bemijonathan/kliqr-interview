import moment from "moment";
import React from "react";
import { total } from "../utils/dto";

export default function view(props) {
	const { user, detail } = props.userDetail;

	const { trend, similarUsers } = props;

	console.log(user, detail, trend, similarUsers, "prpppps");
	return (
		<div className=" h-screen overflow-y-auto__ flex-grow flex flex-col items-center pt-24">
			{/* {JSON.stringify(props.userDetail)} */}
			<div className="__lg_avatar">
				<img src={user ? user.avatar : ""} className="rounded-full " alt="" />
			</div>
			<div className="mt-2">
				<h2 className="biotif-semibold tracking-wide text-2xl">
					{user ? user.first_name : ""} {user ? user.last_name : ""}
				</h2>
			</div>
			<div className="flex space-x-2 items-center">
				<p className="biotif text-sm mb-0">
					{detail ? detail.length : ""} transactions
				</p>
				<i className="ri-checkbox-blank-circle-fill circle"></i>
				<p className="biotif text-sm mb-0">
					Joined {user ? moment(user.created_at).fromNow() : ""}{" "}
				</p>
			</div>
			<div className="mt-8 space-x-4 flex justify-between items-center">
				<div className="p-4 border border-gray-200 rounded-md __shadow bg-white">
					<p className="text-xs biotif mb-1">Total Spent</p>
					<p
						className="biotif-semibold text-blue-700 text-xl font-semibold"
						style={{ "font-family": "Space Mono" }}
					>
						₦{detail ? total(detail).total_spent : ""}
					</p>
				</div>
				<div className="p-4 border border-gray-200 rounded-md __shadow bg-white">
					<p className="text-xs biotif mb-1">Total Income</p>
					<p
						className="biotif-semibold text-blue-700 text-xl font-semibold"
						style={{ "font-family": "Space Mono" }}
					>
						₦{detail ? total(detail).total_income : ""}
					</p>
				</div>
				<div className="p-4 border border-gray-200 rounded-md __shadow bg-white">
					<p className="text-xs biotif mb-1">Transactions</p>
					<p
						className="biotif-semibold text-blue-700 text-xl font-semibold"
						style={{ "font-family": "Space Mono" }}
					>
						{detail ? detail.length : 0}
					</p>
				</div>
			</div>
			<div className="mt-16 w-2/3 flex justify-between items-start">
				<div>
					<h4 className="biotif-semibold text-base ">Recurring Expenses</h4>
					<div className="mt-4 grid grid-cols-4 gap-4">
						{/* {JSON.stringify(trend)} */}
						{trend
							? trend.map((e, i) => {
									return (
										<div
											className="py-2 px-4 flex items-center justify-center rounded-md"
											style={{ background: "#A7C5EB" }}
											key={i}
										>
											{/* <i className="ri-gift-fill"></i> */}
											<img src={e.icon_url} alt="" width="25px"/>
										</div>
									);
							  })
							: ""}
					</div>
					{trend ? (
						trend.length === 0 ? (
							<h1>No reoccuring expense Found</h1>
						) : (
							""
						)
					) : (
						""
					)}
				</div>
				<div>
					<h4 className="biotif-semibold text-base px-4">
						USERS LIKE{" "}
						<span className="text-sm ml-2">
							"{user ? user.first_name : ""} {user ? user.last_name : ""}"
						</span>
					</h4>
					{similarUsers !== undefined ? (
						similarUsers.length ? (
							similarUsers.map((e) => {
								return (
									<div
										className="flex items-center px-4 mt-2 py-2 user"
										key={e.id}
									>
										{/* {JSON.stringify(e)} */}
										<div className="" onClick={() => props.newUser(e.id)}>
											<img
												src={e.avatar}
												className="rounded-full w-3/5 mr-3"
												alt=""
												style={{ width: "45px", height: "45px" }}
											/>
										</div>
										<div onClick={() => props.newUser(e.userId)}>
											<h4 className="biotif-semibold text-sm tracking-wide">
												{e.first_name} {e.last_name}
											</h4>
											<div className="flex space-x-2 items-center">
												
												<p className="biotif __transact mb-0">
													{e.transaction_count} transactions
												</p>
												<i className="ri-checkbox-blank-circle-fill circle"></i>
												<p className="biotif __transact mb-0">
													Joined {moment(e.created_at).fromNow()}
												</p>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<h1 className="flex items-start px-4 mt-2 py-2 user text-center w-full justify-center">
								No Similar User Found
							</h1>
						)
					) : (
						<h1 className="flex items-start px-4 mt-2 py-2 user text-center">
							No Similar User Found
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}
