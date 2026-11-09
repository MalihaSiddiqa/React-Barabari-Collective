import {Link} from 'react-router-dom';
import {students} from '../data';

function Home() {
    return(
        <div>
        <h1>Students Data</h1>
        {students.map((student)=>(

            <div key={student.id} style={{
                border:'1px solid #ccc',
                padding:'10px',
                 margin:'10px 0'}}>
        
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <Link to={`/topic/${student.id}`}>View Profile</Link>
            </div>
       ))}
        </div>
    );
}
export default Home;
