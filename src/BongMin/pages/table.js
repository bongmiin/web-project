import "./table.css";


const Table = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th >층</th>
                        <th>시설</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ background: "#FFFF00" }}>5층</td>
                        <td>음악실</td>
                        <td>악기연주, 노래교실, 공연활동 등 노후의 건전한 여가문화를 위한 음악프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ background: "#FFFF00" }}>4층</td>
                        <td>미술실</td>
                        <td>그림 그리기, 서예, 공예 등 노후의 건전한 여가문화를 위한 미술프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ background: "#FFFF00" }}>3층</td>
                        <td>체육실</td>
                        <td>탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한 체육프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ background: "#FFFF00" }}>2층</td>
                        <td>요리실</td>
                        <td>요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 요리프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ background: "#FFFF00" }}>1층</td>
                        <td>진료실<br />& 물리치료실</td>
                        <td>건강상담, 응급처치, 물리치료 처방 등 의사의 진료를 받을 수 있습니다. <br/> 또한 운동치료, 전기자극치료 등 물리치료서비스를 이용할 수 있습니다.</td>
                    </tr>
                </tbody>
            </table>
            <p>
                <u><b>복지관의 층별 시설</b>을 기억해 주세요.</u>
            </p>
        </>
    );
};


export default Table;