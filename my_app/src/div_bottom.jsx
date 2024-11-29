import Group69 from './assets/Group 69.png';
function div_bottom() {
    return (
        <div >
            <img src={Group69} style={{
                width: '2217.33px', // Lățimea elementului
                height: '210px', // Înălțimea elementului
                position: 'absolute', // Poziționare absolută
                top: '2040px', // Poziționarea pe axa Y
                left: '-149px', // Poziționarea pe axa X (în stânga)
                gap: '0px', // Fără spațiu între elemente
            }}>
            </img>
            <div style={{
                width: '358px', // Lățimea elementului
                height: '51.65px', // Înălțimea elementului
                position: 'absolute', // Poziționare absolută
                top: '2079px', // Poziționarea pe axa Y
                left: '812px', // Poziționarea pe axa X
                gap: '0px', // Fără spațiu între elementele copil (dacă există)
                // opacity: '0', // Elementul este invizibil
                backgroundColor: 'transparent', // Fundal transparent (poți ajusta)
            }}>

            </div>
        </div>
    );
}
export default div_bottom