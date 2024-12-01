import Group89 from './assets/Group 89.png';
import { Link } from 'react-router-dom';


function Div_Header() {
    return (
        <header style={{ width: "1920px", height: "136px", color: "white", top: "0px", left: "0px", position: "fixed" }}>
            <div style={{ padding: "20px", backgroundColor: 'rgba(0, 35, 109, 1)', width: "1920px", height: "97px", top: "0px", borderColor: "rgba(255, 255, 255, 1)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                <div>
                    <img src={Group89} style={{ width: '123px', height: '63.4px', top: "20px", left: "20px", position: "absolute" }} />
                </div>
                <Link to={"/retete"} style={{
                    color: "white"
                }}>
                    <div style={{ position: 'absolute', width: "89px", height: "27px", left: "308px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                        Recipes
                    </div></Link>
                <Link to={"/adauga_retete"}>
                    <div style={{ position: 'absolute', width: "131px", height: "27px", left: "427px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                        Add Recipe
                    </div></Link>
                <div style={{ position: 'absolute', width: "95px", height: "27px", left: "1756px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                    <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>
                        Log out
                    </Link>
                </div>

            </div>


        </header >

    )
}
export default Div_Header