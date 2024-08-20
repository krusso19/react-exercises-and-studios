export default function HobbyLinks(){
    let hobbyLinks = ["https://necenterforcircusarts.org/","http://www.circuscenter.org/"];
    return (
    <div>
        <h1>My Hobbies</h1>
        <a href={hobbyLinks[0]}>NECCA</a>
        <a href={hobbyLinks[1]}>SF Circus Center</a>
    </div>
    );
}