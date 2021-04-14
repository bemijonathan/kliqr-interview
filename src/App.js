import React from "react";
import Sidebar from "./components/sidebar";
import View from "./components/view";
import { useEffect, useState } from "react";
import request from "./utils/axios";

export default function App() {
	const [userState, setstate] = useState([]);
	const [userDetail, setUserDetails] = useState({});
	const [trend, setTrend] = useState([]);
	const [similar, setSimilarUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [err, setError] = useState(false);

	const getTrend = async (id) => {
		const { data } = await request.get("users/expense-trends/" + id);
		setTrend(data.data);
		return data.data;
	};

	const getSimilar = async (trends = [], id) => {
		if (trends.length === 0) {
			setSimilarUsers([]);
		} else {
			const { data } = await request.post("transactions/similar/" + id, {
				trend: trends,
			});
			setSimilarUsers(data.data);
			console.log(data, "similar Users");
		}
	};

	const getUsers = async () => {
		const { data } = await request.get("users");
		return data.data;
	};

	const getEveryInformation = async (id) => {
		setLoading(true);
		try {
    
			if (id) {
        const { data } = await request.get("users/" + id);
        // debugger
        setUserDetails({ detail: data.data.details, user: data.data.user });
        const trend = await getTrend(data.data.user.id);
        debugger
				await getSimilar(trend, data.data.user.id);
			} else {
				getUsers(id).then(async (e) => {
					console.log(e);
					setstate(e.data);
					setUserDetails({ detail: e.details, user: e.user });
					const trend = await getTrend(e.user.id);
					await getSimilar(trend, e.user.id);
					return e;
				});
			}
		} catch (error) {
			console.log(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getEveryInformation();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<nav className="h-10 bg-purple-900"></nav>
			{loading ? (
				<div>Loading Please Wait ....</div>
			) : err ? (
				<div>An Error Occured Contact Support</div>
			) : (
				<section
					className="relative bg-white h-screen overflow-hidden"
					id="app"
				>
					<div className="flex">
						<Sidebar userState={userState} newUser={getEveryInformation}/>
						<View
							userDetail={userDetail}
							trend={trend}
							similarUsers={similar}
              newUser={getEveryInformation}
						/>
					</div>
				</section>
			)}
		</>
	);
}
