import plant from  "../img/plant.png";
import "./Problem.css"

const Problem = () => {
    return(
    <>
        <h3>
        <img src = {plant} alt="img" style={{ width : "20px"}} />
        &nbsp; 층별 시설 기억하기
        </h3>
    <p>다음은 노인복지관의 층별 안내도입니다.</p>
    <p>각 <b>층별 시설</b>과 설명을 소리 내어 읽어보세요.</p>
    </>
    );
}

export default Problem;