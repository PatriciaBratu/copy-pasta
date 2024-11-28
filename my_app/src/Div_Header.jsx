import Group89 from './assets/Group 89.png';
function Div_Header() {
    return (
        <header style={{ width: "1920px", height: "136spx", color: "white", top: "0px", position: "fixed" }}>
            <div style={{ padding: "20px", backgroundColor: 'rgba(0, 35, 109, 1)', width: "1920px", height: "97px", top: "0px", borderColor: "rgba(255, 255, 255, 1)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                <div>
                    <img src={Group89} style={{ width: '123px', height: '63.4px', top: "17px", left: "56px" }} />
                </div>
                <div style={{ position: 'absolute', width: "89px", height: "27px", left: "308px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                    Recipes
                </div>
                <div style={{ position: 'absolute', width: "131px", height: "27px", left: "427px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                    Add Recipe
                </div>
                <div style={{ position: 'absolute', width: "95px", height: "27px", left: "1756px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                    Register
                </div>
                <div style={{
                    position: 'absolute',
                    width: "94px",
                    height: "37px", /* Lățimea și înălțimea sunt egale pentru a crea un cerc */
                    top: "30px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "22px",
                    left: "1620px",
                    lineHeight: "26.82px",
                    textAlign: "center", /* Centrarea textului pe verticală */
                    borderRadius: "15px", /* Colțuri rotunjite */
                    backgroundColor: "rgba(0, 35, 109, 1)", /* Fundal alb pentru dreptunghi */
                    color: "white", /* Culoare textului */
                    display: "flex",
                    border: "2px solid white",
                    justifyContent: "center", /* Centrează textul pe orizontală */
                    alignItems: "center" /*/* Alinierea pe verticală a textului */
                }}>
                    <div style={{ position: "absolute", top: "5px" }}>
                        Login
                    </div>
                </div>
            </div>

        </header>

    )
}
export default Div_Header