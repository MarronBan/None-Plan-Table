import React from "react"
import { Button } from "@mui/material"
import { MyPage } from "./css/Login"
export default function Login() {
	return (
		<MyPage>
			<div className="wrapper">
				<h2>不计划时间表</h2>
				<p></p>
				<ul className="plates">
					<li>纪念日、备忘录...</li>
				</ul>
				<form className="add-items">
					<input
						type="text"
						name="item"
						placeholder="请输入昵称"
						required
					/>
					<input type="submit" value="+ Add Item" />
				</form>
			</div>
		</MyPage>
	)
}
