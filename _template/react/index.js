const $app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

const Component = (props) => {
	return (
		<h1>{props.name}</h1>
	)
}


root.render(
	<div>
		<Component name="Iván" />
	</div>
)