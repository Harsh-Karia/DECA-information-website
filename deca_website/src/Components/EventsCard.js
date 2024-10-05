import '../Styles/Pages.css';

export default function EventsCard({title, date, desc1, desc2, desc3, desc4}){
	return(
        <div className="half_box">
            <h2>{title}</h2>
			<h3>{date}</h3>
			<p>{desc1}</p>
			<p>{desc2}</p>
            <p>{desc3}</p>
            <p>{desc4}</p>
        </div>
	)
}