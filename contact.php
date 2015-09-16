<html>
<head>
<title>Contact Form</title>
</head>
<body>
	<form name="form1" methond="post" action="send.php">

		<ul>
			<li>
				<label for="name">Name:</label>
				<input type="text" name="name" id="name" />
			</li>
			<li>
				<label for="email">Email:</label>
				<input type="text" name="email" id="email" />
			</li>
			<li>
				<label for="topic">Topic:</label>
				<select>
					<option value="One">One</option>
					<option value="Two">Two</option>
					<option value="Three">Three</option>
					<option value="Four">Four</option>
				</select>
			</li>
			<li>
				<label for="message">Message:</label>
				<textarea id="message" name="message" cols="42" rows="9"></textarea>
			</li>
			<li>
				<input type="submit" value="Submit" />
			</li>
		</ul>

	</form>

</body>

</html>