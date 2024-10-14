import '../Styles/Pages.css';

export default function AboutCard({title, desc}){
	return(
        <div className="card">
			<h2 classname="normal">{title}</h2>
			<p className="card-text">{desc}</p>
		</div> 
	);
}