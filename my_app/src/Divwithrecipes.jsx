import down4 from './assets/down4.png';
import down2 from './assets/down2.png';
import image from './assets/image 1.png';
function Divwithrecipes() {
    return (
        <div style={{
            position: "absolute",
            width: "1934px",
            height: "464px",
            top: "1080px",
            left: "-7px",
            backgroundColor: "rgba(0, 35, 109, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "1"
        }}>
            <div style={{
                position: "absolute",
                width: "460px",
                height: "53px",
                top: "35px",
                fontFamily: "Montserrat",
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "58.51px",
                color: "rgba(255, 255, 255, 1)",
                textAlign: "center",
                opacity: "1"
            }}>
                Top rated recipes
            </div>

            {/* Div-ul cu bordura și imaginea */}
            <div style={{
                width: "1684px",
                height: "252px",
                top: "1202px",
                left: "118px",
                borderWidth: "2px",  // Adăugăm o margine vizibilă
                borderStyle: "solid",
                borderColor: "rgba(0, 156, 65, 1)",
                opacity: "1",
                display: "flex",  // Adăugăm display flex pentru a alinia divurile interne pe orizontală
                justifyContent: "space-between", // Pune cele două divuri albe pe același nivel
                // padding: "10px" // Un pic de padding pentru a crea spațiu între ele
            }}>
                {/* Primul div alb */}
                <div style={{
                    width: "496px",
                    height: "252px",
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "rgba(0, 156, 65, 1)",
                    opacity: "1",
                    position: "relative"
                }}>
                    <img src={down4} style={{
                        width: "252px",
                        height: "251px",
                        display: "block",
                        // margin: "0 auto",  // Alinierea imaginii la centru
                        borderTop: "2px solid green"
                    }} />
                    {/* <div style={{
                        width: "167px",
                        height: "27px",
                        left: "411px",
                        fontFamily: "Montserrat",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "24.38px",
                        // textAlign: "center",
                        color: "black",
                        position: "relative"
                    }}>
                        Supa la plic
                    </div> */}
                </div>

                {/* Al doilea div alb, pe același nivel */}
                <div style={{
                    width: "496px",
                    height: "251px",
                    color: "white",
                    background: "rgba(248, 248, 248, 1)",
                    border: "1px solid rgba(0, 156, 65, 1)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    opacity: "1",
                    left: "700px",
                    position: "absolute"
                }}>
                    <img src={down2} style={{
                        width: "252px",
                        height: "251px",
                        display: "block",
                        // margin: "0 auto",  // Alinierea imaginii la centru
                        borderTop: "2px solid green"
                    }} />
                </div>

                <div style={{
                    width: "496px",
                    height: "251px",
                    color: "white",
                    background: "rgba(248, 248, 248, 1)",
                    border: "1px solid rgba(0, 156, 65, 1)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    opacity: "1",
                    left: "1300px",
                    position: "absolute"
                }}>
                    <img src={image} style={{
                        width: "252px",
                        height: "251px",
                        display: "block",
                        // margin: "0 auto",  // Alinierea imaginii la centru
                        borderTop: "2px solid green"
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Divwithrecipes;
